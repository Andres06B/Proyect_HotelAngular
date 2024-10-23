import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarExitosaComponent } from './reservar-exitosa.component';

describe('ReservarExitosaComponent', () => {
  let component: ReservarExitosaComponent;
  let fixture: ComponentFixture<ReservarExitosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarExitosaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarExitosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
