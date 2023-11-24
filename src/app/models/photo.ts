import { Album } from "./album";

export class Photo {
    constructor(
        public id: number,
        public photoImage: string,
        public uploadDate?: Date,
        public albumId?: number,
        public album?: Album         
    ){}
}
export class PhotoDTO {
    constructor(
        public id: number,
        public photoImage: string,
        public AlbumId?: number,
        public uploadDate?: Date
    ){}
}
