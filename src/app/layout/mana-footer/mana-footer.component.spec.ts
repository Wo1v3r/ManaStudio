import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaFooterComponent } from './mana-footer.component';

describe('ManaFooterComponent', () => {
  let component: ManaFooterComponent;
  let fixture: ComponentFixture<ManaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
