import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl = 'https://localhost:5009/api/currencyconversion';  // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Function to call the API for currency conversion
  convertCurrency(from: string, to: string, amount: number, date?: string): Observable<any> {
    let params = new HttpParams()
      .set('fromCurrency', from)
      .set('toCurrency', to)
      .set('amount', amount.toString());

    if (date) {
      params = params.set('date', date);
    }

    return this.http.get<any>(`${this.apiUrl}/convert`, { params });
  }
}