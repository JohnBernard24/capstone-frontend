import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit{
  
  @Input() friend!: Friend;
  ngOnInit(): void {}

  constructor(){}


  
}
