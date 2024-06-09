import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CurpValidationService {

  constructor() { }

  // Validador de CURP
  curpValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const curp = control.value;
      if (curp && !this.isValidCurpFormat(curp)) {
        return { invalidCurp: true };
      }
      return null;
    };
  }

  // Función para validar el formato del CURP
  private isValidCurpFormat(curp: string): boolean {
    const regexCurp = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z][0-9]$/;
    return regexCurp.test(curp);
  } 
}
