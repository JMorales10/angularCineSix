import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAsientosComponent } from './pagina-asientos.component';

describe('PaginaAsientosComponent', () => {
  let component: PaginaAsientosComponent;
  let fixture: ComponentFixture<PaginaAsientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAsientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
