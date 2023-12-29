import { Component } from '@angular/core';
import {User} from './user.model'

@Component({
  selector: 'app-user', 
  templateUrl: './user.component.html',
})


export class UserComponent {
  user: User = { id: 1, name: 'aaa', age: 20 };

  onUpdateAge() {
    this.user.age++;
  }
  
}
