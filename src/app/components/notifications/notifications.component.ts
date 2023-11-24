import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from 'src/app/models/like';
import { Notification } from 'src/app/models/notification';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';
import { Comment } from '../../models/comment';
import { Friend } from '../../models/friend';
import { Post } from 'src/app/models/post';
import {Router} from '@angular/router';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  private userId: number = Number(this.sessionService.getUserId());
  notifications: Notification[] = [];
  likeContext: Like = new Like();
  commentContext: Comment = new Comment();
  friendRequestContext: Friend = new Friend();
  notificationType: string = "";


  likerFullName: string = this.likeContext.liker?.firstName + " " + this.likeContext.liker?.lastName;
  commenterFullName: string = this.commentContext.user?.firstName + " " + this.commentContext.user?.lastName;
  requesterFullName: string = this.friendRequestContext.sender?.firstName + " " + this.friendRequestContext.sender?.lastName;
  receiverFullName: string = this.friendRequestContext.receiver?.firstName + " " + this.friendRequestContext.receiver?.lastName;


  // notifications: any[] = [
  //   { sender: 'Blessie Balagtas', action: "liked", type: 'photo', read: false },
  //   { sender: 'John Bernard Tinio', action: "commented on", type: 'post', read: false },
  //   { sender: 'Jigs Capinpuyan', action: "liked", type: 'post', read: false }
  //   // Add more notifications as needed
  // ];

  ngOnInit() {
    for (const notification of this.notifications) {
      this.getNotificationContext(notification.id, notification.notificationType);
    }
  }

  constructor(
    private sessionService: SessionService,
    private notificationService: NotificationService,
    private router: Router
  ){
    this.getNotificationLists(this.userId);
    this.notifications.forEach(element => {
      
    });
  }
  getNotificationLists(userId: number) {
    this.notificationService.getNotificationLists(userId).subscribe((response: Notification[]) =>{
      this.notifications = response;
    },
    (error) => {
        console.error("Error fetching notifications", error);
    });
    this.notifications.forEach(notification => {
      this.getNotificationContext(notification.contextId, notification.notificationType);
    });
  }

  

  getNotificationContext(contextId: number | undefined, notificationType?: string){
    this.notificationService.getNotificationContext(contextId).subscribe((response) =>{
      if(notificationType === "like"){
        this.likeContext = response;
      }
      else if(notificationType === "comment"){
        this.commentContext = response;
      }
      else if(notificationType === "add-friend-request" || notificationType === "accept-friend-request"){
        this.friendRequestContext = response;
      }
    },
    (error) => {
        console.error("Error fetching notifications", error);
    });

  }

  // When the notification is clicked:
  // onClick(): void {
  //   // take notification Id
  //   // this.router/// 

  //   if(this.notificationType === "like"){
  //     this.router.navigate['/' + this.likeContext.postId];
  //   }



  // }


  onClick(notificationType?: string) {
    switch (notificationType) {
      case 'like':
        this.router.navigate(['/post' + this.likeContext.postId]); // Replace 'postId' with the actual ID
        break;
      case 'comment':
        this.router.navigate(['/post' + this.commentContext.postId]); // Navigate to the post
        break;
      case 'add-friend-request':
        this.router.navigate(['/user' + this.friendRequestContext.senderId]); // Navigate to the user profile
        break;
      case 'accept-friend-request':
        this.router.navigate(['/user' + this.friendRequestContext.receiverId]); // Navigate to the user profile
        break;
      // Add more cases for other notification types and their corresponding routes
      default:
        return;
    }
  }
  

  markAsRead(notification: Notification) {
    // Perform actions to mark the notification as read
    // For example, update the 'read' property
    notification.isRead = true;
  }

  markAsUnread(notification: Notification) {
    // Perform actions to mark the notification as read
    // For example, update the 'read' property
    notification.isRead = false;
  }

  deleteNotification(notification: Notification) {
    // Perform actions to delete a specific notification
    const index = this.notifications.indexOf(notification);
    // if (index !== -1) {
    //     console.log(index)
    //   this.notifications.splice(index, 1);
    // }

    if (this.notifications.length > 0) {
      this.notifications.shift();
  }
  }

  deleteAllNotifications() {
    // Perform actions to delete all notifications
    this.notifications = [];
  }
}
