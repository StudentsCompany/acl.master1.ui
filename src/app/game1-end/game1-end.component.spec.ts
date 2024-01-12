import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1EndComponent } from './game1-end.component';

describe('Game1EndComponent', () => {
  let component: Game1EndComponent;
  let fixture: ComponentFixture<Game1EndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game1EndComponent]
    });
    fixture = TestBed.createComponent(Game1EndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
