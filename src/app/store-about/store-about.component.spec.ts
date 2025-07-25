import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAboutComponent } from './store-about.component';

describe('StoreAboutComponent', () => {
  let component: StoreAboutComponent;
  let fixture: ComponentFixture<StoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
