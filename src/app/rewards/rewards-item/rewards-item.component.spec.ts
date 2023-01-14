import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsItemComponent } from './rewards-item.component';

describe('RewardsItemComponent', () => {
  let component: RewardsItemComponent;
  let fixture: ComponentFixture<RewardsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
