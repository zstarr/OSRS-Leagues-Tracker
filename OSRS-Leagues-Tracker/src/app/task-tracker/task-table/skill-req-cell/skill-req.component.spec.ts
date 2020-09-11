import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillReqComponent } from './skill-req.component';

describe('SkillReqComponent', () => {
  let component: SkillReqComponent;
  let fixture: ComponentFixture<SkillReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
