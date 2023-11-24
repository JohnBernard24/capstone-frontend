import { User } from "./user";

export class Friend {
    constructor(
        public id?: number,
        public receiverId?: number,
        public receiver?: User,
        public senderId?: number,
        public sender?: User,
        public friendshipDate?: Date,
        public isFriend?: boolean
    ){}
}

export class FriendDTO{
    constructor(
        public receiverId: number,
        public senderId: number,
        public friendshipDate: Date
    ){}
}
