import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaRegisterComponent } from './mana-register.component';

describe('ManaRegisterComponent', () => {
  let component: ManaRegisterComponent;
  let fixture: ComponentFixture<ManaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
