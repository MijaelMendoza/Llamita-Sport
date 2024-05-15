import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSoldComponent } from './most-sold.component';

describe('MostSoldComponent', () => {
  let component: MostSoldComponent;
  let fixture: ComponentFixture<MostSoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostSoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
