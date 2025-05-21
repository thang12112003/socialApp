import { Photo } from "./photo.model";

export interface CommentResponse {
  id: number;
  content: string;
  createdAt: Date;
  user: {
    id: number;
    knowAs: string;
    photoUrl?: Photo[];
  };
}
