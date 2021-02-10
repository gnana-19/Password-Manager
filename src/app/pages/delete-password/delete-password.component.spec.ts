import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePasswordComponent } from './delete-password.component';

describe('DeletePasswordComponent', () => {
  let component: DeletePasswordComponent;
  let fixture: ComponentFixture<DeletePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
