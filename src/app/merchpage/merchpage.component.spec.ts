import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchpageComponent } from './merchpage.component';

describe('MerchpageComponent', () => {
  let component: MerchpageComponent;
  let fixture: ComponentFixture<MerchpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
