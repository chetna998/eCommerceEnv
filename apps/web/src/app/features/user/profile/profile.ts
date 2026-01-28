import { Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private userService = inject(UserService)
  ngOnInit(){
    this.userService.getUserProfile().subscribe((res) => {
      console.log(res)
    })
  }
}
