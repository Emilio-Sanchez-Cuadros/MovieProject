import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/models/iuser.model';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
  providers: [UsersService]
})
export class UserSettingsComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit() { 
    this.getUsers();
   }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(res => {
        this.usersService.users = res as IUser[];
        console.log(res)
      })
    }

  editUser(user: IUser){
    this.usersService.selectedUser = user;
  }

  updateUser(form: NgForm){
      this.usersService.putUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        window.alert("usuario actualizado")
        this.getUsers();
      });
   
  }

  deleteUser(_id: String){
    if(confirm('¿Seguro que deseas eliminarlo?'))
    this.usersService.deleteUser(_id)
    .subscribe(res => {
      this.getUsers();
    });
  }

   //method to reset the form
   resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.usersService.selectedUser = new IUser();
    }
  }
}
