export class Comment {
    constructor(
        public Id?: number,
        public CommentContent?: string,
        public DateCommented?: Date,
        public PostId?: number,
        public Post?: object,
        public CommenterId?: number,
        public User?: object
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
