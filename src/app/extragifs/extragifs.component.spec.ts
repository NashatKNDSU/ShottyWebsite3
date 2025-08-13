import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtragifsComponent } from './extragifs.component';

describe('ExtragifsComponent', () => {
  let component: ExtragifsComponent;
  let fixture: ComponentFixture<ExtragifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtragifsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtragifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
