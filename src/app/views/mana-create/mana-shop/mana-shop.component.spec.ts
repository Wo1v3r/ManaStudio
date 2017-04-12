import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaShopComponent } from './mana-shop.component';

describe('ManaShopComponent', () => {
  let component: ManaShopComponent;
  let fixture: ComponentFixture<ManaShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
