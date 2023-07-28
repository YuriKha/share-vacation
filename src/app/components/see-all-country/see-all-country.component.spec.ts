import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllCountryComponent } from './see-all-country.component';

describe('SeeAllCountryComponent', () => {
  let component: SeeAllCountryComponent;
  let fixture: ComponentFixture<SeeAllCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAllCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAllCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
