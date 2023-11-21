import { Post } from "./post";
import { User } from "./user";

export class Like {
    constructor(
        public id?: number,
        public postId?: number,
        public post?: Post,
        public likerId?: number,
        public liker?: User,
    ){}


}

export class LikeDTO {
    constructor(
        public postId?: number,
        public likerId?: number
    ){}
}


export class LikeViewResponse {
    constructor(
        public post?: Post,
        public liker?: User
    ){}
}
