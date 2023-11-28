import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivPostComponent } from './indiv-post.component';

describe('IndivPostComponent', () => {
  let component: IndivPostComponent;
  let fixture: ComponentFixture<IndivPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndivPostComponent]
    });
    fixture = TestBed.createComponent(IndivPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
