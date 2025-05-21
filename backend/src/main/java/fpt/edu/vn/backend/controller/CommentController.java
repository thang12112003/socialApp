package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.dto.CommentRequest;
import fpt.edu.vn.backend.dto.CommentResponse;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @PostMapping("/{postId}")
    public ResponseEntity<?> addComment(
            @PathVariable Integer postId,
            @AuthenticationPrincipal User currentUser,
            @RequestBody CommentRequest request) {
        commentService.addComment(postId, currentUser.getId(), request);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{postId}")
    public ResponseEntity<List<CommentResponse>> getCommentsByPost(@PathVariable Integer postId) {
        return ResponseEntity.ok(commentService.getCommentsByPost(postId));
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteComment(
            @PathVariable Integer commentId,
            @AuthenticationPrincipal User currentUser) {
        commentService.deleteComment(commentId, currentUser.getId());
        return ResponseEntity.ok().build();
    }
}
