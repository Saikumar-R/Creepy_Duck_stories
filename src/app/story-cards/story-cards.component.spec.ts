import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCardsComponent } from './story-cards.component';

describe('StoryCardsComponent', () => {
  let component: StoryCardsComponent;
  let fixture: ComponentFixture<StoryCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
