import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProvidersComponent } from './find-providers.component';

describe('FindProvidersComponent', () => {
  let component: FindProvidersComponent;
  let fixture: ComponentFixture<FindProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
