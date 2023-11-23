import { User } from "./user";
import { Photo } from "./photo";

export class Album {
    constructor(
        public id?: number,
        public albumName?: string,
        public userId?: number,
        public user?: User
    ){}
}

export class AlbumDTO {
    constructor(
        public albumName?: string,
        public userId?: number
    ){}
}

export class AlbumWithFirstPhoto {
    constructor(
        public album?: Album,
        public photo?: Photo
    ){}
}