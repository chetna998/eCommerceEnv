import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../core/services/user-service';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-list',
  imports: [MatListModule, MatCardModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  private userService= inject(UserService)
  users = signal<any[]>([])
  fetchUsers(){
    this.userService.getUsers().subscribe((res) => {
      this.users.set(res)
    })
  }

  ngOnInit() {
    this.fetchUsers()
  }
}
