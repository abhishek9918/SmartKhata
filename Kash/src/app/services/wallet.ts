import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Wallet {
  private updateBalance = 20000;

  addBalance(amount: any) {
    this.updateBalance += amount;
  }
}
