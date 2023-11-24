import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAlbumModalComponent } from './new-album-modal.component';

describe('NewAlbumModalComponent', () => {
  let component: NewAlbumModalComponent;
  let fixture: ComponentFixture<NewAlbumModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAlbumModalComponent]
    });
    fixture = TestBed.createComponent(NewAlbumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
