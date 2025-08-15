import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyancatComponent } from './nyancat.component';

describe('NyancatComponent', () => {
  let component: NyancatComponent;
  let fixture: ComponentFixture<NyancatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NyancatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NyancatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
