import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchEventListComponent } from './match-event-list.component';

describe('MatchEventListComponent', () => {
  let component: MatchEventListComponent;
  let fixture: ComponentFixture<MatchEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
