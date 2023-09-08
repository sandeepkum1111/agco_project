import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiclistingComponent } from './comiclisting.component';

describe('ComiclistingComponent', () => {
  let component: ComiclistingComponent;
  let fixture: ComponentFixture<ComiclistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComiclistingComponent]
    });
    fixture = TestBed.createComponent(ComiclistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
