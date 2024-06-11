import { Component } from '@angular/core';
import { GraficaPastelComponent } from './graficas/grafica-pastel/grafica-pastel.component';
import { ApiDocumentSercice } from 'src/app/services/apiDocument/apiDocument.service';
import { register } from 'plotly.js';
import { registerDocument } from 'src/app/Models/registerDocument';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiAuthService } from 'src/app/services/APIBASE/apiUser/api-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-funcionario',
  templateUrl: './home-funcionario.component.html',
  styleUrls: ['./home-funcionario.component.css'],
  //providers: [GraficaPastelComponent]
})
export class HomeFuncionarioComponent {

constructor(
  private apiDocumentService: ApiDocumentSercice,
  private _snackBar: MatSnackBar,
  private apiAuth: ApiAuthService,
  private router: Router
){

}

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file && file.type === 'application/pdf') {
    const reader = new FileReader();
    reader.onload = this.handleFile.bind(this);
    reader.readAsBinaryString(file);
  } else {
    this._snackBar.open('Por favor, selecciona un archivo PDF.', 'Cerrar', {
      duration: 5000,
    });
  }
}

handleFile(event: any) {
  const binaryString = event.target.result;
  const base64String = btoa(binaryString);

  const document: registerDocument = {
    fileBase64: base64String
  };

  this.apiDocumentService.registerDocument(document).subscribe(
    () => {
      this._snackBar.open('Documento subido exitosamente.', 'Cerrar', {
        duration: 5000,
      });
    },
    (error) => {
      console.error('Error al subir el documento:', error);
      this._snackBar.open('Error al subir el documento. Por favor, intenta de nuevo más tarde.', 'Cerrar', {
        duration: 5000,
      });
    }
  );
}

logOut(){
  this.apiAuth.logOut();
  this.router.navigate(['/login']);
}
}
