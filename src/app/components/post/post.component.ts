import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input() post: Post= new Post();
  userId: number = Number(this.sessionService.getUserId());
  
  formattedDate: string | undefined = "";
  
  constructor(
    private sessionService: SessionService,
    private datePipe: DatePipe
  ){
  }

  ngOnInit(): void {
    const datePosted = this.post?.datePosted; 
    this.formattedDate = this.datePipe.transform(datePosted, 'MM/dd/yyyy hh:mm:ss a') || '';
  }
  
}
