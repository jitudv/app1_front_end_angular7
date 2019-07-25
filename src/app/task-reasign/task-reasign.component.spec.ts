import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReasignComponent } from './task-reasign.component';

describe('TaskReasignComponent', () => {
  let component: TaskReasignComponent;
  let fixture: ComponentFixture<TaskReasignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskReasignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskReasignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
