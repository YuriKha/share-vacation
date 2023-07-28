import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllVacationComponent } from './see-all-vacation.component';

describe('SeeAllVacationComponent', () => {
  let component: SeeAllVacationComponent;
  let fixture: ComponentFixture<SeeAllVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAllVacationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAllVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
