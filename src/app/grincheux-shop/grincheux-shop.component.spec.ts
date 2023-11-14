import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrincheuxShopComponent } from './grincheux-shop.component';

describe('GrincheuxShopComponent', () => {
  let component: GrincheuxShopComponent;
  let fixture: ComponentFixture<GrincheuxShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrincheuxShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrincheuxShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
