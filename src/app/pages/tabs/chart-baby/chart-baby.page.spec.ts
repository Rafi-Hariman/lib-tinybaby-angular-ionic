import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartBabyPage } from './chart-baby.page';

describe('ChartBabyPage', () => {
  let component: ChartBabyPage;
  let fixture: ComponentFixture<ChartBabyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBabyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
