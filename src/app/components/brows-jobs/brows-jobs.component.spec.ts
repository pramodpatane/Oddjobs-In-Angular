import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsJobsComponent } from './brows-jobs.component';

describe('BrowsJobsComponent', () => {
  let component: BrowsJobsComponent;
  let fixture: ComponentFixture<BrowsJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
