export class Photo {
    constructor(
        public Id?: number,
        public PhotoImage?: Blob,
        public UploadDate?: Date,
        public AlbumId?: number,
        public Album?: object         
    ){}
}
export class PhotoDTO {
    constructor(
        public PhotoImage?: Blob,
        public AlbumId?: number,
    ){}
}
