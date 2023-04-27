import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptComponentComponent } from './typescript-component.component';

describe('TypescriptComponentComponent', () => {
  let component: TypescriptComponentComponent;
  let fixture: ComponentFixture<TypescriptComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
