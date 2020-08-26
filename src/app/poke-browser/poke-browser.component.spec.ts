import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeBrowserComponent } from './poke-browser.component';

describe('PokeBrowserComponent', () => {
  let component: PokeBrowserComponent;
  let fixture: ComponentFixture<PokeBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
