  import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  import { PlotlyService } from 'angular-plotly.js';

  @Component({
    selector: 'app-grafica-pastel',
    templateUrl: './grafica-pastel.component.html',
    styleUrls: ['./grafica-pastel.component.css']
  })
  export class GraficaPastelComponent  {
    public graph = {
      data: [
        //  { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter' },
          { values: [10, 20, 30], labels: ['A', 'B', 'C'], type: 'pie' },
      ],
      layout: { width: 800, height: 600, title: 'A Fancy Plot' }
    };
  }
