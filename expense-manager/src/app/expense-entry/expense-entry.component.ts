import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  title!: string; // ! makes the initialization optional.

  constructor() {}

  ngOnInit(){
    this.title = "Expense Entry";
  }
}
