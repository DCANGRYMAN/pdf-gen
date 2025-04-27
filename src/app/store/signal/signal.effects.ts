import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal-test',
  template: `
    <h1>Contador: {{ count() }}</h1>
    <button (click)="increment()">Incrementar</button>
  `,
})
export class SignalTestComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('O contador mudou para:', this.count());
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }
}
