  import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  import { PlotlyService } from 'angular-plotly.js';
import { ApiVoteSercice } from 'src/app/services/APIBASE/apiVote/apiVote.service';

  @Component({
    selector: 'app-grafica-pastel',
    templateUrl: './grafica-pastel.component.html',
    styleUrls: ['./grafica-pastel.component.css']
  })
  export class GraficaPastelComponent  {
    public graph: { data: any[], layout: any };

    constructor(private apiVoteService: ApiVoteSercice) {
      this.graph = {
        data: [],
        layout: { width: 800, height: 600, title: 'Total de votos en tu casilla' }
      };
    }
  
    ngOnInit() {
      this.apiVoteService.getVotesGraphic().subscribe(
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
