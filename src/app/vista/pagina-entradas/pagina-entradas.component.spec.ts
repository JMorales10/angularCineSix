import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEntradasComponent } from './pagina-entradas.component';

describe('PaginaEntradasComponent', () => {
  let component: PaginaEntradasComponent;
  let fixture: ComponentFixture<PaginaEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEntradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
