// src/app/app.component.ts
import { Component } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Currency Converter';

  fromCurrency = 'EUR';
  toCurrency = 'USD';
  amount = 1;
  date?: string;
  convertedAmount?: number;
  errorMessage?: string;

  constructor(private currencyService: CurrencyService) { }

  // Function to trigger currency conversion
  convertCurrency() {
    this.currencyService.convertCurrency(this.fromCurrency, this.toCurrency, this.amount, this.date)
      .subscribe(
        (response) => {
          this.convertedAmount = response.convertedAmount;
          this.errorMessage = undefined;
        },
        (error) => {
          this.errorMessage = 'Failed to convert currency. Please try again later.';
          this.convertedAmount = undefined;
        }
      );
  }
}
