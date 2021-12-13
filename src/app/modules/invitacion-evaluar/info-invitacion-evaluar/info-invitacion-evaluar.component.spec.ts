import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInvitacionEvaluarComponent } from './info-invitacion-evaluar.component';

describe('InfoInvitacionEvaluarComponent', () => {
  let component: InfoInvitacionEvaluarComponent;
  let fixture: ComponentFixture<InfoInvitacionEvaluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoInvitacionEvaluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInvitacionEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
