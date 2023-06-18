import { Component } from '@angular/core';

@Component({
  selector: 'structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  loggedIn: boolean = false;
  loggedOut: boolean = true;
  numbers = [1, 2, 3, 4, 5, 6, 7];
}
