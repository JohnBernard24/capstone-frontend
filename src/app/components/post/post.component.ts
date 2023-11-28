// import { DatePipe } from '@angular/common';
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

  likedUsers = ['Ad Min', 'Jayvee Tinio', 'Blessie Balagtas', 'Min Ad'];
  comments: any[] = [
    { user: 'Ad Min', text: 'If the sentence is the essential soul to express oneself in their own way, then the paragraph is the virtual body of it. The Text Generator is an intelligent tool that creates random text incorporated with random thoughts. This smart tool is a virtual friend of yours that can talk to you in multidimensional thinking. It will provide you with thoughts, concepts, and ideas of different topics that will not only assist you in creating new knowledge but also enhance your brain function.' },
    { user: 'Jayvee Tinio', text: 'Amazing' },
    { user: 'Blessie Balagtas', text: 'Slay!' },
    { user: 'Min Ad', text: 'Lorem ipsum et dolor sit amet.' }
  ];
  
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