import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacioneSAppComponent } from './habitacione-sapp.component';

describe('HabitacioneSAppComponent', () => {
  let component: HabitacioneSAppComponent;
  let fixture: ComponentFixture<HabitacioneSAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabitacioneSAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitacioneSAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
