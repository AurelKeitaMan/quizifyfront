import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestCategorizerComponent } from './quest-categorizer.component';

describe('QuestCategorizerComponent', () => {
  let component: QuestCategorizerComponent;
  let fixture: ComponentFixture<QuestCategorizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestCategorizerComponent]
    });
    fixture = TestBed.createComponent(QuestCategorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
