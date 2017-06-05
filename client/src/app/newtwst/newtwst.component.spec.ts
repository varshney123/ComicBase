import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtwstComponent } from './newtwst.component';

describe('NewtwstComponent', () => {
  let component: NewtwstComponent;
  let fixture: ComponentFixture<NewtwstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtwstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtwstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
