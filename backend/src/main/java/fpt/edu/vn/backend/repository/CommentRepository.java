package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.Comment;
import fpt.edu.vn.backend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findByPost(Post post);
}
