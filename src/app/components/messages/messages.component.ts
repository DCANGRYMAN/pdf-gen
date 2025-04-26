import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-message-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit {
  @Input() input: Event;
  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    null;
  }
}
