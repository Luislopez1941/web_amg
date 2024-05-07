import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSecondComponent } from './section-second.component';

describe('SectionSecondComponent', () => {
  let component: SectionSecondComponent;
  let fixture: ComponentFixture<SectionSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
