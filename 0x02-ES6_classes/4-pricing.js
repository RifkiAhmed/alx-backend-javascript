import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else { throw new TypeError('Amount must be a number'); }
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else { throw new TypeError('Currency must be a currency'); }
  }

  get currency() {
    return this._currency;
  }
}
