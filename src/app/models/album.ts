export class Album {
    constructor(
        public Id?: number,
        public AlbumName?: string,
        public UserId?: number,
        public User?: object
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
        public Album?: object,
        public Photo?: object
    ){}
}