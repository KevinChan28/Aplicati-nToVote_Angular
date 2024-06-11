import { Component, OnInit } from '@angular/core';
import { GraficaAdminComponent } from '../grafica/grafica-admin/grafica-admin.component';
import { ApiAuthService } from 'src/app/services/APIBASE/apiUser/api-auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CrearPartidoPoliticoDialogComponent } from './dialog/crear-partido-politico-dialog/crear-partido-politico-dialog.component';
import { CrearFuncionarioDialogComponent } from './dialog/crear-funcionario-dialog/crear-funcionario-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { Response } from 'src/app/Models/response';
import { ApiDocumentSercice } from 'src/app/services/apiDocument/apiDocument.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  documents: any[] = [];

  constructor(
    private apiAuthService: ApiAuthService,
    private apiDocumentService: ApiDocumentSercice,
    private route: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.apiDocumentService.getDocuments().subscribe((response: Response) => {
      if (response.success) {
        this.documents = response.data;
      }
    });
  }

  logOut(): void {
    this.apiAuthService.logOut();
    this.route.navigate(['/login']);
  }

  openCrearFuncionarioDialog(): void {
    const dialogRef = this.dialog.open(CrearFuncionarioDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo de crear funcionario se cerró');
      // Aquí puedes agregar lógica después de cerrar el diálogo, si es necesario
    });
  }

  openCrearPartidoPoliticoDialog(): void {
    const dialogRef = this.dialog.open(CrearPartidoPoliticoDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo de crear partido político se cerró');
      // Aquí puedes agregar lógica después de cerrar el diálogo, si es necesario
    });
  }

  downloadDocument(document: any): void {
    const linkSource = `data:application/pdf;base64,${document.fileBase64}`;
    const downloadLink = window.document.createElement('a'); // Aquí se asegura que `document` es el objeto global del navegador
    const fileName = `document_${document.id}.pdf`;
  
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
  
}
