import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefVarDemoComponent } from './template-ref-var-demo.component';

describe('TemplateRefVarDemoComponent', () => {
  let component: TemplateRefVarDemoComponent;
  let fixture: ComponentFixture<TemplateRefVarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRefVarDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefVarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
