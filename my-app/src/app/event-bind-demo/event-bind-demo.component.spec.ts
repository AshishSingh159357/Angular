import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindDemoComponent } from './event-bind-demo.component';

describe('EventBindDemoComponent', () => {
  let component: EventBindDemoComponent;
  let fixture: ComponentFixture<EventBindDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
