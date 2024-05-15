import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisCatProComponent } from './dis-cat-pro.component';

describe('DisCatProComponent', () => {
  let component: DisCatProComponent;
  let fixture: ComponentFixture<DisCatProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisCatProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisCatProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
