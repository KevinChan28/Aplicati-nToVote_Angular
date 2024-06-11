import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignalRService } from 'src/app/services/signalr.service';
import { ApiPartyService } from 'src/app/services/APIBASE/apiParty/apiParty.service';
import { RegisterVote } from 'src/app/Models/RegisterVote';
import { ApiVoteSercice } from 'src/app/services/APIBASE/apiVote/apiVote.service';
import { ApiAuthService } from 'src/app/services/APIBASE/apiUser/api-auth.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit{
  alreadyVote: boolean = false;

 public candidatos!: any[];
  selectedCandidato: any = null;

constructor(private _snackBar: MatSnackBar, 
  private router: Router, 
  private signalr : SignalRService, 
  private apiParty: ApiPartyService,
  private apiVote: ApiVoteSercice,
  private apiAuth: ApiAuthService
) {}

ngOnInit() {
  this.signalr.addVoteListener();
  this.getPartys();
}

  onCandidatoSelected(candidato: any) {
    this.selectedCandidato = candidato;
  }

  getPartys() {
    this.apiParty.getPartys().subscribe(
      (response: any) => {
        this.candidatos = response.data.map((candidato: any) => ({
          ...candidato,
          image: `data:image/jpeg;base64,${candidato.image}` // Asegúrate de que image sea una cadena base64 válida
        }));
      },
      (error) => {
        console.error('Error fetching parties:', error);
      }
    );
  }

  votar() {
    if (this.selectedCandidato) {
      // Preparar el objeto de voto
      const vote: RegisterVote = {
        applicant: this.selectedCandidato.applicant,
        createdDate: new Date(),
        section: localStorage.getItem('section'), // Ajusta según corresponda
        voteLocation: localStorage.getItem('state') // Ajusta según corresponda
      };

      // Lógica para registrar el voto
      this.apiVote.registerVote(vote).subscribe(
        () => {
          this.signalr.sendVote(this.selectedCandidato.applicant); // Enviar voto al Hub
          this._snackBar.open(`Has votado por: ${this.selectedCandidato.applicant}`, 'Cerrar', {
            duration: 5000,
          });
          console.log(`Has votado por: ${this.selectedCandidato.applicant}`);
          this.apiAuth.logOut(); // Cerrar sesión
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error registering vote:', error);
          alert('Error al registrar el voto. Por favor, intenta de nuevo más tarde.');
        }
      );
    } else {
      alert('Por favor, selecciona un candidato antes de votar.');
    }
  }
  
  logout() {
    this.apiAuth.logOut();
    this.router.navigate(['/login']);
  }
}
