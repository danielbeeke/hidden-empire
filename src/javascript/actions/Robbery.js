export class Robbery {
  constructor () {

  }

  static applies (properties) {
    return ['shop', 'fast_food', 'restaurant'].includes(properties.class);
  }

  static buttonText (properties) {
    let categoryLabels = {
      'shop': 'shop',
      'fast_food': 'fast food restaurant',
      'restaurant': 'restaurant'
    };

    return `Rob ${categoryLabels[properties.class]} '${properties.name}'`;
  }

  static points () {
    return 140;
  }
}