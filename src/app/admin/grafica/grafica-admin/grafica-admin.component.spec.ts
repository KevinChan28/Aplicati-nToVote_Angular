import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaAdminComponent } from './grafica-admin.component';

describe('GraficaAdminComponent', () => {
  let component: GraficaAdminComponent;
  let fixture: ComponentFixture<GraficaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
