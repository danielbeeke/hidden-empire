export class Confess {
  constructor () {

  }

  static applies (properties) {
    return ['place_of_worship'].includes(properties.class);
  }

  static buttonText (properties) {
    return `Confess at '${properties.name}'`;
  }

  static points () {
    return 30;
  }
}