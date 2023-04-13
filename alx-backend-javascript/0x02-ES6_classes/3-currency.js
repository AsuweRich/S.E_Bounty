export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') throw new Error();
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
