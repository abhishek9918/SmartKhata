import {
  Component,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-current-wallet',
  imports: [],
  templateUrl: './current-wallet.html',
  styleUrl: './current-wallet.scss',
})
export class CurrentWallet implements OnInit, OnChanges {
  @Input() currentBalance!: number;
  constructor() {}
  ngOnInit(): void {
    console.log(this.currentBalance);
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
