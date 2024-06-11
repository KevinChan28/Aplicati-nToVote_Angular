import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFuncionarioDialogComponent } from './crear-funcionario-dialog.component';

describe('CrearFuncionarioDialogComponent', () => {
  let component: CrearFuncionarioDialogComponent;
  let fixture: ComponentFixture<CrearFuncionarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFuncionarioDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFuncionarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
