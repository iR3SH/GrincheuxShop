import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickaxesComponent } from './pickaxes.component';

describe('PickaxesComponent', () => {
  let component: PickaxesComponent;
  let fixture: ComponentFixture<PickaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickaxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
