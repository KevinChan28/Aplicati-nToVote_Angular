import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiPartyService } from 'src/app/services/APIBASE/apiParty/apiParty.service';
import { RegisterParty } from 'src/app/Models/registerParty';

@Component({
  selector: 'app-crear-partido-politico-dialog',
  templateUrl: './crear-partido-politico-dialog.component.html',
  styleUrls: ['./crear-partido-politico-dialog.component.css']
})
export class CrearPartidoPoliticoDialogComponent implements OnInit {

  partyForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private apiPartyService: ApiPartyService,
    public dialogRef: MatDialogRef<CrearPartidoPoliticoDialogComponent>
  ) {
    this.partyForm = this.fb.group({
      candidato: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] || null;
  }

  onSubmit(): void {
    if (this.partyForm.invalid || !this.selectedFile) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;
      const party: RegisterParty = {
        applicant: this.partyForm.get('candidato')?.value,
        name: this.partyForm.get('name')?.value,
        image: base64Image.substring(22)
      };

      this.apiPartyService.registerParty(party).subscribe(response => {
        // Manejar la respuesta de la API
        this.dialogRef.close(response);
      }, error => {
        // Manejar el error
      });
    };

    reader.readAsDataURL(this.selectedFile);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
