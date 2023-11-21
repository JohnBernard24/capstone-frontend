import { User } from "./user";

export class Timeline {
    constructor(
        public id: number,
        public userId: number,
        public user: User,
    ){}
}
