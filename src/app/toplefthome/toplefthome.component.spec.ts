import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplefthomeComponent } from './toplefthome.component';

describe('ToplefthomeComponent', () => {
  let component: ToplefthomeComponent;
  let fixture: ComponentFixture<ToplefthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToplefthomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToplefthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
