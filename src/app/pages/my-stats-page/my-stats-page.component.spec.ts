import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatsPageComponent } from './my-stats-page.component';

describe('MyStatsPageComponent', () => {
  let component: MyStatsPageComponent;
  let fixture: ComponentFixture<MyStatsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStatsPageComponent]
    });
    fixture = TestBed.createComponent(MyStatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
