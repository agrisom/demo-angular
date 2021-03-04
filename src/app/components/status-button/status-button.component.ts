import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'status-button',
  template: `
    <button class="status-button {{class}} {{getColor(text)}}">{{text}}</button>
  `,
  styles: [
    `
      .status-button {
        appearance: none;
        border: none;
        padding: 1rem 0.5rem;
        display: block;
        width: 100%;
        cursor: pointer;
      }
      .status-button:hover {
        filter: brightness(110%);
      }
      .status-button--inline {
        display: inline-block;
        padding: 1rem 1.5rem;
        width: auto;
      }
      .status-button--small {
        padding: 0.5rem 0.25rem;
      }
    `
  ]
})
export class StatusButtonComponent implements OnInit {
  @Input() text: string;
  @Input() class: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  getColor(status) {
    if (status == "doing") {
      return "bg--green";
    } else if (status == "done") {
      return "bg--orange";
    } else if (status == "to do") {
      return "bg--red";
    }
  }
}
