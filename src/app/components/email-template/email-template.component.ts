import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-template',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      *ngIf="input" 
      [href]="input"
      target="_blank"
      style="cursor: pointer;"
    >
      Abrir Template
    </a>
  `,
})
export class EmailTemplateComponent {
  @Input() input?: string | null; 
  @Output() output = new EventEmitter<string>();

  constructor() {
    console.log(this.input);
  }

  emitOutput() {
    this.output.emit('Output data');
  }
}
