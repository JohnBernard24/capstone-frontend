import { Album } from "./album";

export class Photo {
    constructor(
        public id: number,
        public photoImage: File,
        public uploadDate?: Date,
        public albumId?: number,
        public album?: Album         
    ){}
}
export class PhotoDTO {
    constructor(
        public id: number,
        public photoImage: File,
        public AlbumId?: number,
        public uploadDate?: Date
    ){}
}
