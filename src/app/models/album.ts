import { User } from "./user";
import { Photo } from "./photo";

export class Album {
    constructor(
        public Id?: number,
        public AlbumName?: string,
        public UserId?: number,
        public User?: User
    ){}
}

export class AlbumDTO {
    constructor(
        public AlbumName?: string,
        public UserId?: number
    ){}
}

export class AlbumWithFirstPhoto {
    constructor(
        public Album?: Album,
        public Photo?: Photo
    ){}
}