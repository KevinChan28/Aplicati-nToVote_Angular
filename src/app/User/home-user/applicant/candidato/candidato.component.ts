// candidato.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConvertImageService } from 'src/app/services/tools/convertImage.service';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent {
  @Input() candidato: any;
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<void>();
  imageUrl: string | undefined;

  constructor(private convertImageService: ConvertImageService) { }

  ngOnInit() {
    this.convertImage();
  }

  select() {
    this.selected.emit();
  }

  async convertImage() {
    try {
      this.imageUrl = await this.convertImageService.getDecodedImage(this.candidato.image);
      console.log('Image URL:', this.imageUrl); // Verifica la URL generada en la consola
    } catch (error) {
      console.error('Error decoding image:', error);
    }
  }
}
