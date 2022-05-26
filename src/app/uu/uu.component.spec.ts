import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuComponent } from './uu.component';

describe('UuComponent', () => {
  let component: UuComponent;
  let fixture: ComponentFixture<UuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
