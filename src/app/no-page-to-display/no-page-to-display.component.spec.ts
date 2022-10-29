import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageToDisplayComponent } from './no-page-to-display.component';

describe('NoPageToDisplayComponent', () => {
  let component: NoPageToDisplayComponent;
  let fixture: ComponentFixture<NoPageToDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPageToDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPageToDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
