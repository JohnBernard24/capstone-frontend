import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent {
  private userId: number = Number(this.sessionService.getUserId());

  posts: Post[] = [];

  constructor(
    private sessionService: SessionService,
    private userService: UserService
  ){
    
    this.getNewsFeedPosts(this.userId);
  }

  getNewsFeedPosts(userId: number){
    this.userService.getNewsFeedPosts(userId).subscribe((response: Post[]) => {
      this.posts = response;
    },
    (error) => {
      console.error("Error fetching newsfeed posts", error);
    });
  }

  toggleLike(post: any): void {
    post.likes = post.likes + (post.liked ? -1 : 1);
    post.liked = !post.liked;
  }

  showComments(post: any): void {
    post.showComments = !post.showComments;
  }

  addComment(post: any): void {
    const commentText = post.newComment.trim();

    if (commentText !== '') {
      post.comments.push(commentText);
      post.newComment = '';
    }
  }
}
