import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  loginClick(){
    this.router.navigate(["/login"]);
  }

  signUpClick(){
    this.router.navigate(["/register"]);
  }

}