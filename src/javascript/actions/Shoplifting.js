export class Shoplifting {
  constructor () {

  }

  static validClasses () {
    return ['shop'];
  }

  static buttonText (properties) {
    return `Shop lift at '${properties.name}'`;
  }

  static points () {
    return 50;
  }
}