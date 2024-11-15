import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BabyFormPage } from './baby-form.page';

describe('BabyFormPage', () => {
  let component: BabyFormPage;
  let fixture: ComponentFixture<BabyFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
