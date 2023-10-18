import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1HomeComponent } from './game1-home.component';

describe('Game1HomeComponent', () => {
  let component: Game1HomeComponent;
  let fixture: ComponentFixture<Game1HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game1HomeComponent]
    });
    fixture = TestBed.createComponent(Game1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
