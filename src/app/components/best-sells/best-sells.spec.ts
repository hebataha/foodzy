import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSells } from './best-sells';

describe('BestSells', () => {
  let component: BestSells;
  let fixture: ComponentFixture<BestSells>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSells]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSells);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
