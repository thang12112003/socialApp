package fpt.edu.vn.backend.service.impl;

import fpt.edu.vn.backend.dto.CommentRequest;
import fpt.edu.vn.backend.dto.CommentResponse;
import fpt.edu.vn.backend.entity.Comment;
import fpt.edu.vn.backend.entity.Post;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.repository.CommentRepository;
import fpt.edu.vn.backend.repository.PostRepository;
import fpt.edu.vn.backend.repository.UserRepository;
import fpt.edu.vn.backend.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Override
    public void addComment(Integer postId, Integer userId, CommentRequest request) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Comment comment = Comment.builder()
                .content(request.getContent())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .post(post)
                .user(user)
                .build();

        commentRepository.save(comment);
    }

    @Override
    public List<CommentResponse> getCommentsByPost(Integer postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        return commentRepository.findByPost(post).stream().map(c -> {
            CommentResponse res = new CommentResponse();
            res.setId(c.getId());
            res.setContent(c.getContent());
            res.setCreatedAt(c.getCreatedAt());
            // Điền thông tin user
            CommentResponse.UserDto userDto = new CommentResponse.UserDto();
            userDto.setId(c.getUser().getId());
            userDto.setKnowAs(c.getUser().getKnowAs());
            userDto.setPhotoUrl(c.getUser().getPhotos()); // Thêm photoUrl
            res.setUser(userDto);
            return res;
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteComment(Integer commentId, Integer userId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("Comment not found"));

        if (!comment.getUser().getId().equals(userId)) {
            throw new RuntimeException("You are not the owner of this comment");
        }

        commentRepository.delete(comment);
    }
}