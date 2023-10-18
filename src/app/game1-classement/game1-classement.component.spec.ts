import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1ClassementComponent } from './game1-classement.component';

describe('Game1ClassementComponent', () => {
  let component: Game1ClassementComponent;
  let fixture: ComponentFixture<Game1ClassementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game1ClassementComponent]
    });
    fixture = TestBed.createComponent(Game1ClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
