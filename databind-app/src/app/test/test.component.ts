import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  appName: string = "My first app in Angular 8";
  userName: string = "Peter";

  showData($event: any){ 
    console.log("button is clicked!");

    if($event) { 
       console.log($event.target); 
       console.log($event.target.value); 
    } 
 }
}
