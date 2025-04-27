import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
  count = signal(0);

  increment() {
    this.count.update(c => c + 1);
  }
}
