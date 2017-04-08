import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaAboutComponent } from './mana-about.component';

describe('ManaAboutComponent', () => {
  let component: ManaAboutComponent;
  let fixture: ComponentFixture<ManaAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
