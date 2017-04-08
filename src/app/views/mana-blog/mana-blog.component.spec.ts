import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaBlogComponent } from './mana-blog.component';

describe('ManaBlogComponent', () => {
  let component: ManaBlogComponent;
  let fixture: ComponentFixture<ManaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
