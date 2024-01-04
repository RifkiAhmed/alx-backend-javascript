export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else { throw new TypeError('Code must be a string'); }
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else { throw new TypeError('Name must be a string'); }
  }

  get name() {
    return this._name;
  }
}
