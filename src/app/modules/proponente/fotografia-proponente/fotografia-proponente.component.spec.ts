import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografiaProponenteComponent } from './fotografia-proponente.component';

describe('FotografiaProponenteComponent', () => {
  let component: FotografiaProponenteComponent;
  let fixture: ComponentFixture<FotografiaProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotografiaProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografiaProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
