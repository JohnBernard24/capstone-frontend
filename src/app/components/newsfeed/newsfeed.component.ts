import { Component } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent {
  posts = [
    { id: 1, content: 'This is a sample post.', likes: 0, showComments: false, newComment: '', comments: [] }
    // Add more posts as needed
  ];

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
