import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../../shared/models/user/member.model';
import { PostResponse } from '../../shared/models/user/post-response.model';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { AccountService } from '../../account/account.service';
import { TimeagoModule } from 'ngx-timeago';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { EditPostMemberComponent } from '../edit-post-member/edit-post-member.component';
import { SharedService } from '../../shared/services/shared.service';
import { ListUserLikeComponent } from '../list-user-like/list-user-like.component';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { CommentResponse } from '../../shared/models/user/comment-response.model';
import { FormsModule } from '@angular/forms';
import { Photo } from '../../shared/models/user/photo.model';

@Component({
  selector: 'app-list-post-member',
  templateUrl: './list-post-member.component.html',
  styleUrls: ['./list-post-member.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    GalleryModule,
    TimeagoModule,
    ModalModule,
    FormsModule,
  ],
})
export class ListPostMemberComponent implements OnInit, OnDestroy {
  private memberService = inject(MemberService);
  private accountService = inject(AccountService);
  private modalService = inject(BsModalService);
  private sharedService = inject(SharedService);

  bsModalRef?: BsModalRef;
  @Input() photoTab: any;
  currentUserId!: any;
  listPostMember: PostResponse[] = [];
  @Input() member!: Member | null;
  imageUrl: string = '';
  knowsAs: string = '';
  isLoading: boolean = true;
  imagesByPost = new Map<number, GalleryItem[]>();
  likeCounts = new Map<number, number>();
  commentsByPost = new Map<number, CommentResponse[]>();
  commentCounts = new Map<number, number>();

  ngOnInit(): void {
    this.currentUserId = this.accountService.user$()!.id;
    this.getPostByMember();
    this.memberService.getUserIdLikePost();
  }

  ngOnDestroy(): void {
    // Hủy các subscription hoặc sự kiện nếu cần
  }

  getPostByMember() {
    const memberId = this.member?.id || this.accountService.user$()!.id;
    this.memberService.getPostId(memberId).subscribe({
      next: (res: PostResponse[]) => {
        this.listPostMember = res || [];
        this.isLoading = false;
        if (this.listPostMember) {
          this.listPostMember.forEach(post => {
            const galleryItems = post.photos.map(photo => new ImageItem({ src: photo.url, thumb: photo.url }));
            this.imagesByPost.set(post.id, galleryItems);
            this.fetchLikeCount(post.id);
            this.fetchComments(post.id);
          });
        }
      },
      error: (err) => {
        console.error('Lỗi khi tải bài viết:', err);
        this.isLoading = false;
      },
    });
  }

  fetchLikeCount(postId: number) {
    this.memberService.getLikeCount(postId).subscribe({
      next: (count: number) => {
        this.likeCounts.set(postId, count);
      },
      error: (error) => {
        console.error(`Lỗi khi lấy số lượt thích cho bài viết ${postId}:`, error);
      },
    });
  }

  fetchComments(postId: number) {
    this.memberService.getCommentsByPost(postId).subscribe({
      next: (comments: CommentResponse[]) => {
        console.log(`Bình luận cho bài viết ${postId}:`, comments);
        this.commentsByPost.set(postId, comments);
        this.commentCounts.set(postId, comments.length);
      },
      error: (error) => {
        console.error(`Lỗi khi lấy bình luận cho bài viết ${postId}:`, error);
      },
    });
  }

  deleteComment(commentId: number, postId: number) {
    this.sharedService
      .showNotification( true ,'Xác nhận xóa', 'Bạn có chắc chắn muốn xóa bình luận này không?')
      .subscribe(confirmed => {
        if (confirmed) {
          this.memberService.deleteComment(commentId).subscribe({
            next: () => {
              this.fetchComments(postId);
              this.sharedService.showNotification(true, 'Thành công', 'Bình luận đã được xóa.');
            },
            error: (error) => {
              console.error(`Lỗi khi xóa bình luận ${commentId}:`, error);
              let errorMessage = 'Không thể xóa bình luận. Vui lòng thử lại sau.';
              if (error.status === 403) {
                errorMessage = 'Bạn không có quyền xóa bình luận này.';
              }
              this.sharedService.showNotification(true, 'Lỗi', errorMessage);
            },
          });
        }
      });
  }

  toggleLike(postId: number) {
    this.memberService.likePostToggle(postId).subscribe({
      next: () => {
        this.memberService.getUserIdLikePost();
        this.fetchLikeCount(postId);
      },
      error: (error) => {
        console.error('Lỗi khi toggle like:', error);
      },
    });
  }

  isPostLiked(postId: number): boolean {
    return this.memberService.userLikePostIds().includes(postId);
  }

  showListUserLikeModal(postId: number) {
    this.memberService.getAllMemberLikePost(postId).subscribe({
      next: (users) => {
        const initialState = { users };
        this.bsModalRef = this.modalService.show(ListUserLikeComponent, {
          initialState,
          class: 'modal-dialog-centered',
        });
      },
      error: (err) => {
        console.error('Lỗi khi tải danh sách người thích bài viết:', err);
      },
    });
  }

  showCommentModal(postId: number) {
    const initialState = { postId };
    this.bsModalRef = this.modalService.show(CommentModalComponent, {
      initialState,
      class: 'modal-dialog-centered',
    });

    this.bsModalRef.content.commentAdded.subscribe(() => {
      this.fetchComments(postId);
    });
  }

  deletePost(postId: number): void {
    this.sharedService
      .showNotification(true,'Xác nhận xóa', 'Bạn có chắc chắn muốn xóa bài viết này?')
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.memberService.deletePost(postId).subscribe({
            next: (res: any) => {
              this.listPostMember = this.listPostMember.filter(post => post.id !== postId);
              this.sharedService.showNotification(true, 'Thành công', res.message);
            },
            error: (err) => {
              console.error('Lỗi khi xóa bài viết:', err);
              this.sharedService.showNotification(true, 'Lỗi', err.error.error);
            },
          });
        }
      });
  }

  openEditPostModal(post: PostResponse): void {
    const initialState = { post };
    this.bsModalRef = this.modalService.show(EditPostMemberComponent, {
      class: 'modal-dialog-centered modal-lg',
      initialState,
    });

    this.bsModalRef.content.postUpdated.subscribe((updatedPost: PostResponse) => {
      this.updatePostInList(updatedPost);
      this.getPostByMember();
    });
  }

  updatePostInList(updatedPost: PostResponse): void {
    const index = this.listPostMember.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.listPostMember[index] = updatedPost;
      console.log('Bài viết đã được cập nhật trong danh sách:', updatedPost);
    }
  }

  getPhotoMainCurrentUser() {
    this.imageUrl = this.accountService.user$()!.photoUrl;
    return this.imageUrl;
  }

  getKnowAsCurrentUser() {
    this.knowsAs = this.accountService.user$()!.knowAs;
    return this.knowsAs;
  }

  getMainPhotoUrl(photos: Photo[] | undefined): string | undefined {
    if (photos && photos.length > 0) {
      const mainPhoto = photos.find(photo => photo.isMain);
      return mainPhoto?.url;
    }
    return undefined;
  }
}
