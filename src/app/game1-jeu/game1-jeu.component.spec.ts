import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1JeuComponent } from './game1-jeu.component';

describe('Game1JeuComponent', () => {
  let component: Game1JeuComponent;
  let fixture: ComponentFixture<Game1JeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game1JeuComponent]
    });
    fixture = TestBed.createComponent(Game1JeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
