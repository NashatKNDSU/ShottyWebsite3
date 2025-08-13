import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsupComponent } from './thumbsup.component';

describe('ThumbsupComponent', () => {
  let component: ThumbsupComponent;
  let fixture: ComponentFixture<ThumbsupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbsupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
