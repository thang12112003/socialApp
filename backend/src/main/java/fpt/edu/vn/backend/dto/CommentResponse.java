package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.Photo;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class CommentResponse {
    private Integer id;
    private String content;
    private LocalDateTime createdAt;
    private UserDto user;

    @Data
    public static class UserDto {
        private Integer id;
        private String knowAs;
        private List<Photo> photoUrl;
    }
}
