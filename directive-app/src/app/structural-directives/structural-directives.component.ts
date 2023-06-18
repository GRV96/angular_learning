import { Component } from '@angular/core';

@Component({
  selector: 'structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  loggedIn: boolean = false;
  loggedOut: boolean = true;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  people: any[] = [
    {id: 1, name: "person1"},
    {id: 2, name: "person2"},
    {id: 3, name: "person3"},
    {id: 4, name: "person4"}];
}
