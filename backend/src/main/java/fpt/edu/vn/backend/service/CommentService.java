package fpt.edu.vn.backend.service;

import fpt.edu.vn.backend.dto.CommentRequest;
import fpt.edu.vn.backend.dto.CommentResponse;

import java.util.List;

public interface CommentService {
    void addComment(Integer postId, Integer userId, CommentRequest request);
    List<CommentResponse> getCommentsByPost(Integer postId);
    void deleteComment(Integer commentId, Integer userId);
}
