import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BabyInformationPage } from './baby-information.page';

describe('BabyInformationPage', () => {
  let component: BabyInformationPage;
  let fixture: ComponentFixture<BabyInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
