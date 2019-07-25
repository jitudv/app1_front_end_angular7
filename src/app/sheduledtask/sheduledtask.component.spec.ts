import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduledtaskComponent } from './sheduledtask.component';

describe('SheduledtaskComponent', () => {
  let component: SheduledtaskComponent;
  let fixture: ComponentFixture<SheduledtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduledtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduledtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
