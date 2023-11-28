import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-indiv-post',
  templateUrl: './indiv-post.component.html',
  styleUrls: ['./indiv-post.component.css']
})
export class IndivPostComponent implements OnInit {
  @Input() post: Post= new Post();
  userId: number = Number(this.sessionService.getUserId());

  likedUsers = ['Ad Min', 'Jayvee Tinio', 'Blessie Balagtas', 'Min Ad'];
  
  // formattedDate: string | undefined = "";
  
  constructor(
    private sessionService: SessionService,
    // private datePipe: DatePipe
  ){
  }

  ngOnInit(): void {
    // const datePosted = this.post?.datePosted; 
    // this.formattedDate = this.datePipe.transform(datePosted, 'MM/dd/yyyy hh:mm:ss a') || '';
  }

}
