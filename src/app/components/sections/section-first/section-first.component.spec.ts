import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFirstComponent } from './section-first.component';

describe('SectionFirstComponent', () => {
  let component: SectionFirstComponent;
  let fixture: ComponentFixture<SectionFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
