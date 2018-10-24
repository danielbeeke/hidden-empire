export class Confess {
  constructor () {

  }

  static validClasses () {
    return ['place_of_worship'];
  }

  static buttonText (properties) {
    return `Confess at '${properties.name}'`;
  }

  static points () {
    return 30;
  }
}