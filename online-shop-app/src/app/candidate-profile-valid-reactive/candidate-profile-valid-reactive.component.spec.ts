import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfileValidReactiveComponent } from './candidate-profile-valid-reactive.component';

describe('CandidateProfileValidReactiveComponent', () => {
  let component: CandidateProfileValidReactiveComponent;
  let fixture: ComponentFixture<CandidateProfileValidReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateProfileValidReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateProfileValidReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
