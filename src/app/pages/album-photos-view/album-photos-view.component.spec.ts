import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosViewComponent } from './album-photos-view.component';

describe('AlbumPhotosViewComponent', () => {
  let component: AlbumPhotosViewComponent;
  let fixture: ComponentFixture<AlbumPhotosViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumPhotosViewComponent]
    });
    fixture = TestBed.createComponent(AlbumPhotosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
