import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDatabindDemoComponent } from './two-way-databind-demo.component';

describe('TwoWayDatabindDemoComponent', () => {
  let component: TwoWayDatabindDemoComponent;
  let fixture: ComponentFixture<TwoWayDatabindDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDatabindDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDatabindDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
