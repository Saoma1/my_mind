import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['item'];

  toggle({ target }) {
    const isOpening = target.hasAttribute('open');

    if (isOpening) {
      // if opening - close the others
      this.itemTargets.forEach((item) => {
        if (item === target) return;
        item.removeAttribute('open');
      });
    }
  }
}
