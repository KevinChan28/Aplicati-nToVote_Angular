import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit{
  alreadyVote: boolean = false;

  candidatos: any[] = [
    {name: 'Candidato 1', team: 'PRI',},
    {name: 'Candidato 2', team: 'PAN',},
    {name: 'Candidato 3', team: 'PAN',},
  ];
  selectedCandidato: any = null;

constructor(private _snackBar: MatSnackBar, private router: Router) {}

ngOnInit() {
  this.alreadyVote = JSON.parse(localStorage.getItem('alreadyVote') || 'false');
}

  onCandidatoSelected(candidato: any) {
    this.selectedCandidato = candidato;
  }

  votar() {
    if (this.selectedCandidato) {
      // Lógica para votar
      this.alreadyVote = true;
      localStorage.setItem('alreadyVote', 'true');
      this.router.navigate(['/login']);
      this._snackBar.open(`Has votado por: ${this.selectedCandidato.name}`, 'Cerrar', {
        duration: 5000,
      }
      );
      console.log(`Has votado por: ${this.selectedCandidato.name}`);
    } else {
      alert('Por favor, selecciona un candidato antes de votar.');
    }
  }
  
  logout() {
    this.router.navigate(['/login']);
  }
}
