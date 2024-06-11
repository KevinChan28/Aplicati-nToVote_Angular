import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPartidoPoliticoDialogComponent } from './crear-partido-politico-dialog.component';

describe('CrearPartidoPoliticoDialogComponent', () => {
  let component: CrearPartidoPoliticoDialogComponent;
  let fixture: ComponentFixture<CrearPartidoPoliticoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPartidoPoliticoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPartidoPoliticoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
