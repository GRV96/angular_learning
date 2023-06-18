import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent {
  users: User[] = [new User(1, "User1"), new User(2, "User2")];
}
