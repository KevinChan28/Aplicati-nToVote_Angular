import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertImageService{
    constructor()  {}
    async getDecodedImage(base64String: string): Promise<string> {
        const blob = await this.dataURItoBlob(base64String);
        return URL.createObjectURL(blob);
      }
    
      private dataURItoBlob(dataURI: string): Promise<Blob> {
        return new Promise((resolve, reject) => {
          const byteString = atob(dataURI.split(',')[1]);
          const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          resolve(new Blob([ab], { type: mimeString }));
        });
      }
}
