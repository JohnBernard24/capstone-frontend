import { User } from "./user";

export class Notification {

    constructor(
        public id?: number,
        public notifiedUserId?: number,
        public notifiedUser?: User,
        public notificationType?: string,
        public contextId?: number,
        public isRead?: boolean
    ){}
}


