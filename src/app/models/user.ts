import { Photo } from "./photo";

export class User {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public password?: string,
        public birthDate?: Date,
        public sex?: string,
        public phoneNumber?: string,
        public aboutMe?: string,
        public profileImageId?: number,
        public photo?: Photo
    ){}   
}

export class UserRegisterDTO {
    constructor(
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public password?: string,
        public birthDate?: Date,
        public sex?: string,
        public phoneNumber?: string
    ){}
}

export class UserLoginDTO {
    constructor(
        public email?: string,
        public password?: string
    ){}
}

export class LoginResponse {
    constructor(
        public userId?: number,
        public email?: string,
        public password?: string
    ){}
}

export class ProfileDTO {
    constructor(
        public firstName?: string,
        public lastName?: string,
        public birthDate?: Date,
        public sex?: string,
        public phoneNumber?: string,
        public aboutMe?: string
    ){}
}

export class MiniProfileDTO {
    constructor(
        public Id?: number,
        public firstName?: string,
        public lastName?: string,
        public photo?: Photo,
        public friendCount?: number
    ){}
}

export class EditEmailDTO {
    constructor(
        public userId?: number,
        public newEmail?: string
    ){}
}

export class EditPasswordDTO {
    constructor(
        public userId?: number,
        public currentPassword?: string,
        public newPassword?: string
    ){}
}

export class ProfilePictureDTO {
    constructor(
        public profileImageId?: number,
        public photo?: object
    ){}
}

export class AboutMeDTO {
    constructor(
        public aboutMe?: string
    ){}
}

export class ProfileViewResponse {
    constructor(
        public userId?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public birthDate?: Date,
        public sex?: string,
        public phoneNumber?: string,
        public aboutMe?: string,
        public profileImageId?: number,
        public photo?: object
    ){}
}