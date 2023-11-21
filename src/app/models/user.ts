export class User {
    constructor(
        public Id?: number,
        public FirstName?: string,
        public LastName?: string,
        public Email?: string,
        public Password?: string,
        public BirthDate?: Date,
        public Sex?: string,
        public PhoneNumber?: string,
        public AboutMe?: string,
        public ProfileImageId?: number,
        public Photo?: object
    ){}   
}

export class UserRegisterDTO {
    constructor(
        public FirstName?: string,
        public LastName?: string,
        public Email?: string,
        public Password?: string,
        public BirthDate?: Date,
        public Sex?: string,
        public PhoneNumber?: string
    ){}
}

export class UserLoginDTO {
    constructor(
        public Email?: string,
        public Password?: string
    ){}
}

export class LoginResponse {
    constructor(
        public UserId?: number,
        public Email?: string,
        public Password?: string
    ){}
}

export class ProfileDTO {
    constructor(
        public FirstName?: string,
        public LastName?: string,
        public BirthDate?: Date,
        public Sex?: string,
        public PhoneNumber?: string,
        public AboutMe?: string
    ){}
}

export class MiniProfileDTO {
    constructor(
        public FirstName?: string,
        public LastName?: string,
        public Photo?: object,
        public FriendCount?: number
    ){}
}

export class EditEmailDTO {
    constructor(
        public Email?: string
    ){}
}

export class EditPasswordDTO {
    constructor(
        public Password?: string
    ){}
}

export class ProfilePictureDTO {
    constructor(
        public ProfileImageId?: number,
        public Photo?: object
    ){}
}

export class AboutMeDTO {
    constructor(
        public AboutMe?: string
    ){}
}

export class ProfileViewResponse {
    constructor(
        public UserId?: number,
        public FirstName?: string,
        public LastName?: string,
        public Email?: string,
        public BirthDate?: Date,
        public Sex?: string,
        public PhoneNumber?: string,
        public AboutMe?: string,
        public ProfileImageId?: number,
        public Photo?: object
    ){}
}