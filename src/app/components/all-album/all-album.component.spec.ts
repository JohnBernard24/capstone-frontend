import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAlbumComponent } from './all-album.component';

describe('AllAlbumComponent', () => {
  let component: AllAlbumComponent;
  let fixture: ComponentFixture<AllAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAlbumComponent]
    });
    fixture = TestBed.createComponent(AllAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
