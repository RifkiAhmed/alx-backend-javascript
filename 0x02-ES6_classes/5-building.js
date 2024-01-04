export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  /* eslint class-methods-use-this: "off" */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }
}
