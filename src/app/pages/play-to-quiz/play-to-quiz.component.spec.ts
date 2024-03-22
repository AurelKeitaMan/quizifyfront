import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayToQuizComponent } from './play-to-quiz.component';

describe('PlayToQuizComponent', () => {
  let component: PlayToQuizComponent;
  let fixture: ComponentFixture<PlayToQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayToQuizComponent]
    });
    fixture = TestBed.createComponent(PlayToQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
