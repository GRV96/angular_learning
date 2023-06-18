export interface ExpenseEntry {
  id: number;
  item: string;
  amount: number;
  category: string;
  location: string;
  spentOn: Date;
  createdOn: Date;
}
