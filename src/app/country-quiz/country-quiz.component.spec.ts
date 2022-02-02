import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryQuizComponent } from './country-quiz.component';

describe('CountryQuizComponent', () => {
  let component: CountryQuizComponent;
  let fixture: ComponentFixture<CountryQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
