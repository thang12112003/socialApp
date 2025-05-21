import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MemberService } from '../member.service';
import { CommonModule } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../account/account.service';
import { SharedService } from '../../shared/services/shared.service';
import { Photo } from '../../shared/models/user/photo.model';
import { CommentResponse } from '../../shared/models/user/comment-response.model';
import { CommentRequest } from '../../shared/models/user/comment-request.model';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, TimeagoModule, FormsModule],
})
export class CommentModalComponent implements OnInit {
  @Input() postId!: number;
  modalRef = inject(BsModalRef);
  private memberService = inject(MemberService);
  private accountService = inject(AccountService);
  private sharedService = inject(SharedService);

  comments: CommentResponse[] = [];
  newComment: string = '';
  currentUserId!: any;
  commentAdded = new EventEmitter<void>();

  ngOnInit(): void {
    this.currentUserId = this.accountService.user$()!.id;
    console.log('postId:', this.postId); // Debug
    console.log('User token:', this.accountService.user$()?.jwt); // Debug
    this.loadComments();
  }

  loadComments() {
    this.memberService.getCommentsByPost(this.postId).subscribe({
      next: (comments: CommentResponse[]) => {
        console.log(`Bình luận cho bài viết ${this.postId}:`, comments); // Debug
        this.comments = comments;
      },
      error: (error) => {
        console.error(`Lỗi khi tải bình luận cho bài viết ${this.postId}:`, error);
        this.sharedService.showNotification(true, 'Lỗi', 'Không thể tải bình luận. Vui lòng thử lại sau.');
      },
    });
  }

  addComment() {
    if (this.newComment.trim()) {
      const request: CommentRequest = { content: this.newComment };
      this.memberService.addComment(this.postId, request).subscribe({
        next: () => {
          this.newComment = '';
          this.loadComments();
          this.commentAdded.emit();
        },
        error: (error) => {
          console.error('Lỗi khi thêm bình luận:', error);
          let errorMessage = 'Không thể thêm bình luận. Vui lòng thử lại sau.';
          if (error.status === 403) {
            errorMessage = 'Bạn không có quyền bình luận bài viết này. Hãy kiểm tra xem bạn có phải là bạn bè của người đăng không.';
          } else if (error.status === 401) {
            errorMessage = 'Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.';
          } else if (error.status === 404) {
            errorMessage = 'Bài viết không tồn tại.';
          }
          this.sharedService.showNotification(true, 'Lỗi', errorMessage);
        },
      });
    }
  }

deleteComment(commentId: number) {
  this.sharedService.showNotification( true ,'Xác nhận xóa', 'Bạn có chắc chắn muốn xóa bình luận này không?')
    .subscribe(confirmed => {
      if (confirmed) {
        this.memberService.deleteComment(commentId).subscribe({
          next: () => {
            this.loadComments();
            this.commentAdded.emit();
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

  // Thêm phương thức để lấy URL ảnh chính
  getMainPhotoUrl(photos: Photo[] | undefined): string | undefined {
    if (photos && photos.length > 0) {
      const mainPhoto = photos.find(photo => photo.isMain);
      return mainPhoto?.url;
    }
    return undefined;
  }
}
