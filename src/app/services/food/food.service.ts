import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private   foodurl = 'https://balarathinam-foodapp-api.onrender.com/api/meals';
 private mailurl = 'https://balarathinam-foodapp-api.onrender.com'; 
  constructor(private http: HttpClient) { }

  getFood(): Observable<any> {
    return this.http.get(this.foodurl);
  }
  sendEmail(formData: any) {
    return this.http.post(`${this.mailurl}/send_email`, formData,{ responseType: 'text' });
  }
}