import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["line1", "line2", "line3"]
    open = false;

    connect() {
      console.log("hello")
    }

    toggle() {
        this.open = !this.open;
        this.line1Target.classList.toggle('rotate-45', this.open);
        this.line1Target.classList.toggle('-translate-y-[7px]', !this.open);
        this.line2Target.classList.toggle('opacity-0', this.open);
        this.line3Target.classList.toggle('-rotate-45', this.open);
        this.line3Target.classList.toggle('translate-y-[7px]', !this.open);
    }
}
