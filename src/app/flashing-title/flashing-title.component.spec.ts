import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashingTitleComponent } from './flashing-title.component';

describe('FlashingTitleComponent', () => {
  let component: FlashingTitleComponent;
  let fixture: ComponentFixture<FlashingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashingTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
