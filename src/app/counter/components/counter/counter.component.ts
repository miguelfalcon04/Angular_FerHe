import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{ counter }}</p>

  <button (click)="increaseBY(1)"> +1 </button>
  <button (click)="resetCounter()"> Reset </button>
  <button (click)="increaseBY(-1)"> -1 </button>

  `

})
export class CounterComponent {
  public counter: number = 10;

  increaseBY( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
