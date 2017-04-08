import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaNavComponent } from './mana-nav.component';

describe('ManaNavComponent', () => {
  let component: ManaNavComponent;
  let fixture: ComponentFixture<ManaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
