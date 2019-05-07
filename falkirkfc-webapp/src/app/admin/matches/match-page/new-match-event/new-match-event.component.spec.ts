import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMatchEventComponent } from './new-match-event.component';

describe('NewMatchEventComponent', () => {
  let component: NewMatchEventComponent;
  let fixture: ComponentFixture<NewMatchEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMatchEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMatchEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
