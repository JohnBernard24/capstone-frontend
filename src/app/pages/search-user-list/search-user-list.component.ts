import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-user-list',
  templateUrl: './search-user-list.component.html',
  styleUrls: ['./search-user-list.component.css']
})
export class SearchUserListComponent implements OnInit{

  users: User[] = [];
  currentUser: User = new User();
  searchText: string ='';

  constructor (
    private userService: UserService,
    private route: ActivatedRoute
  ){
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['name'];
    });
    this.showAllUsers();   
  }


  showAllUsers(){
    console.log(this.searchText);
    this.userService.getAllUserBySearch(this.searchText).subscribe((response: User[]) => {
      this.users = response;
    },
    (error) => {
      console.error("Error fetching users", error);
    });
  }

  


}
