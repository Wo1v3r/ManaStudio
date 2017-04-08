import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaLoginComponent } from './mana-login.component';

describe('ManaLoginComponent', () => {
  let component: ManaLoginComponent;
  let fixture: ComponentFixture<ManaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
