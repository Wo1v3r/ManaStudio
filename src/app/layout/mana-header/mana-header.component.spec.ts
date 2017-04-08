import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaHeaderComponent } from './mana-header.component';

describe('ManaHeaderComponent', () => {
  let component: ManaHeaderComponent;
  let fixture: ComponentFixture<ManaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
