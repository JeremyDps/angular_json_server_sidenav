import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHotelsToolbarComponent } from './my-hotels-toolbar.component';

describe('MyHotelsToolbarComponent', () => {
  let component: MyHotelsToolbarComponent;
  let fixture: ComponentFixture<MyHotelsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHotelsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHotelsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
