import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPasswordsComponent } from './all-passwords.component';

describe('AllPasswordsComponent', () => {
  let component: AllPasswordsComponent;
  let fixture: ComponentFixture<AllPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPasswordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
