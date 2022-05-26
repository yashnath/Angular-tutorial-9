import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UufuComponent } from './uufu.component';

describe('UufuComponent', () => {
  let component: UufuComponent;
  let fixture: ComponentFixture<UufuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UufuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UufuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
