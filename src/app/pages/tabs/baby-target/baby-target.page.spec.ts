import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BabyTargetPage } from './baby-target.page';

describe('BabyTargetPage', () => {
  let component: BabyTargetPage;
  let fixture: ComponentFixture<BabyTargetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyTargetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
