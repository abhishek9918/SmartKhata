import { Component, Input, OnInit } from '@angular/core';
import { Heading } from '../heading/heading';
import { CurrentWallet } from '../current-wallet/current-wallet';
import { ExpensesForm } from '../expenses-form/expenses-form';

@Component({
  selector: 'app-smart-khata',
  imports: [Heading, CurrentWallet, ExpensesForm],
  templateUrl: './smart-khata.html',
  styleUrl: './smart-khata.scss',
})
export class SmartKhata implements OnInit {
  updateBalance: any = 10000;
  ngOnInit(): void {}

  handleBalanceUpdate(amount: any) {
    this.updateBalance = amount;
  }
  addAmount(amount: any) {
    console.log(amount);
    this.updateBalance += amount;
  }
}
