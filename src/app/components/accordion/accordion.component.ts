import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { EditPasswordDTO, EditEmailDTO } from 'src/app/models/user';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

 

  // // Define an array of accordion items
  // accordionItems = [
  //   { id: 'editProfile', title: 'Edit Profile', content: 'Your edit profile content here.' },
  //   { id: 'changeAccountSettings', title: 'Change Account Settings', content: 'Your change account settings content here.' },
  //   { id: 'changeOtherSettings', title: 'Change Other Settings', content: 'Your change other settings content here.' }
  // ];

  // // Track the active item
  // activeItem: string = '';

  // // Toggle the active item
  // toggleItem(itemId: string): void {
  //   this.activeItem = this.activeItem === itemId ? '' : itemId;
  // }


  userId: number = Number(this.sessionService.getUserId());
  editPasswordDTO: EditPasswordDTO = new EditPasswordDTO();
  editEmailDTO: EditEmailDTO = new EditEmailDTO();
  repeatNewPassword: string = '';
  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private toast: NgToastService
  ){}

  ngOnInit(): void {}

  activeTab = 'account-general';

  switchTab(tabId: string) {
    this.activeTab = tabId;
  }


  onSubmitEditEmail(): void {
    
    this.editEmailDTO.userId = this.userId;

    if(this.editEmailDTO.newEmail == null){
      this.toast.error({detail: "ERROR", summary: "Please input your new email address.", duration: 5000});
      return;
    }

    console.log(this.editEmailDTO);
    this.userService.editEmail(this.editEmailDTO).subscribe({next: this.successfulEditEmail.bind(this), error: this.failedEditEmail.bind(this)
    
    })

  }

  successfulEditEmail(response: Record<string, any>) {
    
    this.toast.success({detail: "SUCCESS", summary: "Changed email address successfully.", duration: 5000});
  }

  failedEditEmail(result: Record<string, any>) {

   
    this.toast.error({detail: "ERROR", summary: "Error changing email address.", duration: 5000});
    
    
  }

  onSubmitEditPassword(): void {


    this.editPasswordDTO.userId = this.userId;


    if(this.editPasswordDTO.currentPassword == null || this.editPasswordDTO.newPassword == null || this.repeatNewPassword == ""){
      this.toast.error({detail: "ERROR", summary: "All fields are required.", duration: 5000});
      return;
    }

    else if(this.editPasswordDTO.newPassword != this.repeatNewPassword){
      this.toast.error({detail: "ERROR", summary: "New passwords do not match.", duration: 5000});
      return;
    }


    console.log(this.editPasswordDTO);
    this.userService.editPassword(this.editPasswordDTO).subscribe({next: this.successfulEditPassword.bind(this), error: this.failedEditPassword.bind(this)
    
    })

  }

  successfulEditPassword(response: Record<string, any>) {
    
    this.toast.success({detail: "SUCCESS", summary: "Password change successful.", duration: 5000});
  }

  failedEditPassword(result: Record<string, any>) {

   
    this.toast.error({detail: "ERROR", summary: "'Current password' entered does not match your actual current password.", duration: 5000});
    
    
  }




}
