import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDescComponent } from './task-desc.component';

describe('TaskDescComponent', () => {
  let component: TaskDescComponent;
  let fixture: ComponentFixture<TaskDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
