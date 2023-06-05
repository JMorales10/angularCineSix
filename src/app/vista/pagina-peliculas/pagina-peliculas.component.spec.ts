import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPeliculasComponent } from './pagina-peliculas.component';

describe('PaginaPeliculasComponent', () => {
  let component: PaginaPeliculasComponent;
  let fixture: ComponentFixture<PaginaPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
