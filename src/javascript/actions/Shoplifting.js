export class Shoplifting {
  constructor () {

  }

  static applies (properties) {
    return properties.class === 'shop';
  }

  static buttonText (properties) {
    return `Shop lift at '${properties.name}'`;
  }

  static points () {
    return 50;
  }
}