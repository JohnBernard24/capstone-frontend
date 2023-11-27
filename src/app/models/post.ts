import { Photo } from "./photo";
import { User } from "./user";

export class Post {

    constructor(
        public id?: number,
        public postTitle?: string,
        public description?: string,
        public datePosted?: Date,
        public timelineId?: number,
        public timeline?: object,
        public photoId?: number,
        public photo?: Photo,
        public posterId?: number,
        public poster?: User

    ){}
}

export class PostDTO{
    constructor(
        public postTitle?: string,
        public description?: string,
        public photoId?: number,
        public posterId?: number
    ){}
}

export class PostViewResponse{
    constructor(
        public postId?: number,
        public postTitle?: string,
        public description?: string,
        public datePosted?: Date,
        // public photo?: Photo,
        public poster?: User,
        // public timeline?: Timeline
    ){}
}


