import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntractableComponent } from './intractable.component';

describe('IntractableComponent', () => {
  let component: IntractableComponent;
  let fixture: ComponentFixture<IntractableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntractableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntractableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
