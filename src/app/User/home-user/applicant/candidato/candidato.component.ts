import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent {
  @Input() candidato: any;;
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<void>();

  select() {
    this.selected.emit();
  }
}
