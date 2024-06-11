import { Component } from '@angular/core';
import { ApiVoteSercice } from 'src/app/services/APIBASE/apiVote/apiVote.service';

@Component({
  selector: 'app-grafica-admin',
  templateUrl: './grafica-admin.component.html',
  styleUrl: './grafica-admin.component.css'
})
export class GraficaAdminComponent {
  public graph: { data: any[], layout: any };

    constructor(private apiVoteService: ApiVoteSercice) {
      this.graph = {
        data: [],
        layout: { width: 800, height: 600, title: 'Total de votos' }
      };
    }
  
    ngOnInit() {
      this.apiVoteService.getVotesGraphicAdmin().subscribe(
        (response) => {
          if (response.success) {
            const data = response.data;
            const labels = data.map((vote: any) => vote.applicant);
            const values = data.map((vote: any) => vote.totalVotes);
  
            this.graph.data = [{
              values: values,
              labels: labels,
              type: 'pie'
            }];
          } else {
            console.error('Error fetching graphic data:', response.message);
          }
        },
        (error) => {
          console.error('Error fetching graphic data:', error);
        }
      );
    }
}
