import { Component, OnInit } from '@angular/core';
import { IUserModel } from 'src/app/shared/models/IUser.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{
    userServicio:IUserModel;
    constructor(private userService:UserService){}
    ngOnInit(): void {
        this.userServicio = this.userService.traerUsers()
        console.log(this.userServicio);
    }
}
