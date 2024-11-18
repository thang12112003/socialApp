package fpt.edu.vn.backend.service;

import fpt.edu.vn.backend.dto.PhotoResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UploadImageFile {
    PhotoResponse uploadImage(MultipartFile file, int userId) throws IOException;
    void deletePhoto(int photoId) throws IOException;
    void deletePhotoForAdmin(int photoId) throws IOException;
    PhotoResponse setMainPhoto(int photoId, int userId);
}
