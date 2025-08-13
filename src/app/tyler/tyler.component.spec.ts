import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TylerComponent } from './tyler.component';

describe('TylerComponent', () => {
  let component: TylerComponent;
  let fixture: ComponentFixture<TylerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TylerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TylerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
