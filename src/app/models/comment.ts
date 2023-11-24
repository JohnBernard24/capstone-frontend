//import { Post } from "./post";
import { User } from "./user";


export class Comment {
    constructor(
        public id?: number,
        public commentContent?: string,
        public dateCommented?: Date,
        public postId?: number,
        //public Post?: Post,
        public commenterId?: number,
        public user?: User
    ){}
}
export class CommentDTO {
    constructor(
        public commentContent?: string,
        public dateCommented?: Date,
        public postId?: number,
        public commenterId?: number,
    ){}
}
