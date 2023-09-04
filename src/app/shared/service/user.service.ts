import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { IUserModel } from '../models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private coreService:CoreService) { }
  traerUsers() {
    console.log(this.coreService.get<IUserModel[]>( 'users'))
    return this.coreService.get<IUserModel[]>( 'users');
 }
}
