import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartKhata } from './smart-khata';

describe('SmartKhata', () => {
  let component: SmartKhata;
  let fixture: ComponentFixture<SmartKhata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartKhata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartKhata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
