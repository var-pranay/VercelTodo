import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamilComponent } from './samil.component';

describe('SamilComponent', () => {
  let component: SamilComponent;
  let fixture: ComponentFixture<SamilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
