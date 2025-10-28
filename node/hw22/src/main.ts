import { reverseString, capitalize } from "./modules/stringUtils.js";
import { UserManagement } from "./modules/userManagement.js";
import { Finance } from "./modules/finance.js";
import { generateFibonacci, generatePrimeNumbers } from "./modules/sequenceUtils.js";
const revers = reverseString('hello');
const capital = capitalize('hello');
console.log(revers);
console.log(capital);
const loan = new Finance.LoanCalculator(100000, 10,2);
console.log(`Month paymenth:${loan.getMonthlyPayment()}`)
const tax = new Finance.TaxCalculator(5000,20);
console.log(`Доход после налогов ${tax.getIncomeAfterTax()}`)
const admin = new UserManagement.Admin.AdminUser(
  "Alice",
  "alice@example.com",
  "admin"
);
console.log("Текущие права:", admin.getAccess());
admin.changeAccess("superAdmin");
console.log("Новые права:", admin.getAccess())
console.log("Fibonacci до 50:", generateFibonacci(100));
console.log("Простые числа до 50:", generatePrimeNumbers(50));