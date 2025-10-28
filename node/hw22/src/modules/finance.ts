export namespace Finance {
  export class LoanCalculator {
    private principal: number;
    private annualRate: number;
    private years: number; 

    constructor(principal: number, annualRate: number, years: number) {
      this.principal = principal;
      this.annualRate = annualRate;
      this.years = years;
    }

    getMonthlyPayment(): number {
      const monthlyRate = this.annualRate / 12 / 100;
      const totalMonths = this.years * 12;

      if (monthlyRate === 0) {
        return this.principal / totalMonths;
      }

      const payment =
        this.principal *
        (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      return parseFloat(payment.toFixed(2));
    }
  }

  export class TaxCalculator {
    private income: number;
    private taxRate: number;

    constructor(income: number, taxRate: number) {
      this.income = income;
      this.taxRate = taxRate;
    }

    getTaxAmount(): number {
      const tax = (this.income * this.taxRate) / 100;
      return parseFloat(tax.toFixed(2));
    }

    getIncomeAfterTax(): number {
      return parseFloat((this.income - this.getTaxAmount()).toFixed(2));
    }
  }
}