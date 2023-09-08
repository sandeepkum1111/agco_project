import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomicComponent } from './addcomic.component';

describe('AddcomicComponent', () => {
  let component: AddcomicComponent;
  let fixture: ComponentFixture<AddcomicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcomicComponent]
    });
    fixture = TestBed.createComponent(AddcomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
