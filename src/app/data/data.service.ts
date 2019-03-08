import { Injectable } from '@angular/core';
import { FormData }       from './data.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: FormData = new FormData();
  constructor() { }

  setYear(data: string) {
    this.formData.year = data;

  }
  getYear() : string {
      return this.formData.year;
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }
  resetFormData(): FormData {
    this.formData.clear();    
    return this.formData;
}

}
