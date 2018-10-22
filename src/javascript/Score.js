export class Score {
  constructor () {
    this.element = document.createElement('div');
    this.element.classList.add('score');
    document.body.appendChild(this.element)
    this.score = 0;
    this.add(1);
  }

  init () {}

  add (value) {
    this.score += value;
    this.element.innerText = 'Score: ' + this.score;
  }
}