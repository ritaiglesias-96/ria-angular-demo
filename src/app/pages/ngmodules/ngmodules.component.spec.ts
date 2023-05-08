import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodulesComponent } from './ngmodules.component';

describe('NgmodulesComponent', () => {
  let component: NgmodulesComponent;
  let fixture: ComponentFixture<NgmodulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
