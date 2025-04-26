import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-message-container',
  standalone: true,
  imports: [CommonModule],
  template: `<messages-component [input]="input" ($output)="getOutputEvent($event)"></messages-component>`,
})
export class MessageContainerComponent implements OnInit {

  input = {};

    ngOnInit(): void {
        null;
    }

    getOutputEvent(event: any) {
       console.log(event);
       debugger
    }
}


