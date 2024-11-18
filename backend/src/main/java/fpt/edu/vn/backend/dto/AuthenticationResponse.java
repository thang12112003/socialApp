package fpt.edu.vn.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    @JsonProperty("id")
    private Integer id;
    @JsonProperty("email")
    private String email;
    @JsonProperty("knowAs")
    private String knowAs;
    @JsonProperty("firstName")
    private String firstName;
    @JsonProperty("gender")
    private String gender;
    @JsonProperty("photoUrl")
    private String photoUrl;
    @JsonProperty("jwt")
    private String jwt;
    @JsonProperty("refresh_token")
    private String refreshToken;
}
