import { Map } from './Map.js';
import { Actions } from './Actions.js';
import { Score } from './Score.js';
import EventEmitter from './sprinkhaan/js/EventEmitter.js';

class App extends EventEmitter {
  constructor () {
    super();
    this.modules = {
      map: new Map(this),
      score: new Score(this),
      actions: new Actions(this)
    };

    Object.keys(this.modules).forEach(moduleKey => this.modules[moduleKey].init());
  }
}

new App();