import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarcursorComponent } from './guitarcursor.component';

describe('GuitarcursorComponent', () => {
  let component: GuitarcursorComponent;
  let fixture: ComponentFixture<GuitarcursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuitarcursorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarcursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
