import { Component, signal, effect } from '@angular/core';
import { ChildComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-simple-test',
  standalone: true,
  template: `
    <h1>Contador: {{ count() }}</h1>
    <button (click)="increment()">Incrementar</button>
    <app-child [counter]="count"></app-child>
  `,
  imports: [ChildComponent],
})
export class SimpleTestComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('O contador mudou para:', this.count());
    });
  }

  increment() {
    this.count.update((value) => value + 1);
  }
}
