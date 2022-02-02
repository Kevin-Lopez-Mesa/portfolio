import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatWikiComponent } from './cat-wiki.component';

describe('CatWikiComponent', () => {
  let component: CatWikiComponent;
  let fixture: ComponentFixture<CatWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatWikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
