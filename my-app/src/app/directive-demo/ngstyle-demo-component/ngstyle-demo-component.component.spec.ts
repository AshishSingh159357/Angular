import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleDemoComponentComponent } from './ngstyle-demo-component.component';

describe('NgstyleDemoComponentComponent', () => {
  let component: NgstyleDemoComponentComponent;
  let fixture: ComponentFixture<NgstyleDemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyleDemoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
