import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechincianDashboardComponent } from './techincian-dashboard.component';

describe('TechincianDashboardComponent', () => {
  let component: TechincianDashboardComponent;
  let fixture: ComponentFixture<TechincianDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechincianDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechincianDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
