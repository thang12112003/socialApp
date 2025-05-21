import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PostResponse } from '../../shared/models/user/post-response.model';
import { MemberService } from '../member.service';
import { CommonModule } from '@angular/common';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { TimeagoModule } from 'ngx-timeago';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ListUserLikeComponent } from '../list-user-like/list-user-like.component';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { CommentResponse } from '../../shared/models/user/comment-response.model';
import { AccountService } from '../../account/account.service';
import { Photo } from '../../shared/models/user/photo.model';

@Component({
  selector: 'app-list-post-friends',
  templateUrl: './list-post-friends.component.html',
  styleUrls: ['./list-post-friends.component.scss'],
  standalone: true,
  imports: [CommonModule, GalleryModule, TimeagoModule, ModalModule],
})
export class ListPostFriendsComponent implements OnInit, OnDestroy {
  private memberService = inject(MemberService);
  private accountService = inject(AccountService);
  modalService = inject(BsModalService);

  modalRef?: BsModalRef;
  isLoading: boolean = true;
  imagesByPost = new Map<number, GalleryItem[]>();
  commentsByPost = new Map<number, CommentResponse[]>();
  commentCounts = new Map<number, number>();
  likeCounts = new Map<number, number>();
  reachedEnd: boolean = false;
  currentUserId!: any;

  posts: PostResponse[] = [];

  ngOnInit(): void {
    this.currentUserId = this.accountService.user$()!.id;
    this.getAllPostsFriends();
    this.memberService.getUserIdLikePost();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  getAllPostsFriends() {
    this.memberService.getPostsFriends().subscribe({
      next: (res: PostResponse[]) => {
        console.log('Danh sách bài viết bạn bè', res);
        this.posts = res;
        this.isLoading = false;
        if (this.posts) {
          this.posts.forEach(post => {
            const galleryItems = post.photos.map(photo => new ImageItem({ src: photo.url, thumb: photo.url }));
            this.imagesByPost.set(post.id, galleryItems);
            this.fetchLikeCount(post.id);
            this.fetchComments(post.id);
          });
        }
      },
      error: (err) => {
        console.error('Lỗi khi tải bài viết:', err);
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
    this.memberService.deleteComment(commentId).subscribe({
      next: () => {
        this.fetchComments(postId);
      },
      error: (error) => {
        console.error(`Lỗi khi xóa bình luận ${commentId}:`, error);
      },
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

  showListUserLikeModal(postId: number) {
    this.memberService.getAllMemberLikePost(postId).subscribe({
      next: (users) => {
        const initialState = { users };
        this.modalRef = this.modalService.show(ListUserLikeComponent, {
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
    this.modalRef = this.modalService.show(CommentModalComponent, {
      initialState,
      class: 'modal-dialog-centered',
    });

    this.modalRef.content.commentAdded.subscribe(() => {
      this.fetchComments(postId);
    });
  }

  isPostLiked(postId: number): boolean {
    return this.memberService.userLikePostIds().includes(postId);
  }

  onScroll = (): void => {
    const bottomOfWindow = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (bottomOfWindow && this.posts.length > 0 && !this.isLoading) {
      this.reachedEnd = true;
    }
  };

  getMainPhotoUrl(photos: Photo[] | undefined): string | undefined {
    if (photos && photos.length > 0) {
      const mainPhoto = photos.find(photo => photo.isMain);
      return mainPhoto?.url;
    }
    return undefined;
  }
}
