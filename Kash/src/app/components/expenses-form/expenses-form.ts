import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-expenses-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expenses-form.html',
  styleUrl: './expenses-form.scss',
})
export class ExpensesForm implements OnInit {
  expensesReason: any;
  expenseFormGroup!: FormGroup;
  isMoneyDebited: boolean = false;
  totalBalance: number = 10000;
  @Output() currentBalance = new EventEmitter<number>();
  @Output() addAmount = new EventEmitter<string>();
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.expenseFormGroup = this.fb.group({
      expense_reason: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      expense_amount: [
        '',
        [
          Validators.required,

          Validators.pattern('^[0-9]*$'),
          Validators.min(1),
          this.balanceValidator(),
        ],
      ],
    });
  }
  balanceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) return null;

      const inputAmount = Number(control.value);

      if (inputAmount > this.totalBalance) {
        return { insufficientBalance: true };
      }
      return null;
    };
  }

  get f() {
    return this.expenseFormGroup.controls;
  }
  submitted: boolean = false;
  submitForm() {
    this.submitted = true;

    if (this.expenseFormGroup.invalid) {
      return;
    }
    const inputAmount = Number(this.expenseFormGroup.value.expense_amount);
    this.totalBalance -= inputAmount;

    this.currentBalance.emit(this.totalBalance);
    this.expensesReason = this.expenseFormGroup.value;
    this.isMoneyDebited = true;
    this.submitted = false;
    this.expenseFormGroup.reset();
  }

  addBalance(amount: any) {
    this.totalBalance += amount;
    this.addAmount.emit(amount);
    this.expenseFormGroup.get('expense_amount')?.updateValueAndValidity();
  }
}
