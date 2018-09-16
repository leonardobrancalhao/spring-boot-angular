import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaGridComponent } from './categoria-grid.component';

describe('CategoriaGridComponent', () => {
  let component: CategoriaGridComponent;
  let fixture: ComponentFixture<CategoriaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
