import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaCreateComponent } from './mana-create.component';

describe('ManaCreateComponent', () => {
  let component: ManaCreateComponent;
  let fixture: ComponentFixture<ManaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
