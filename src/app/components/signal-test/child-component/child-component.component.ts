import { Component, Input, Signal } from "@angular/core";

@Component({
  selector: 'app-child',
  template: `Contador recebido: {{ counter() }}`,
})
export class ChildComponent {
  @Input({ required: true }) counter!: Signal<number>;
}
