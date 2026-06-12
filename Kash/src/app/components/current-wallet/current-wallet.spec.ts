import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWallet } from './current-wallet';

describe('CurrentWallet', () => {
  let component: CurrentWallet;
  let fixture: ComponentFixture<CurrentWallet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWallet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentWallet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
