import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaGalleryComponent } from './mana-gallery.component';

describe('ManaGalleryComponent', () => {
  let component: ManaGalleryComponent;
  let fixture: ComponentFixture<ManaGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
