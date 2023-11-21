//import { Post } from "./post";
import { User } from "./user";


export class Comment {
    constructor(
        public Id?: number,
        public CommentContent?: string,
        public DateCommented?: Date,
        public PostId?: number,
        //public Post?: Post,
        public CommenterId?: number,
        public User?: User
    ){}
}
export class CommentDTO {
    constructor(
        public CommentContent?: string,
        public DateCommented?: Date,
        public PostId?: number,
        public CommenterId?: number,
    ){}
}
