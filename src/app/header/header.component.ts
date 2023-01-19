import { Component } from '@angular/core'

@Component({
  selector: 'ngPr-header',
  template: ` <div>
    <div class="header">
      <div class="logo">
        <h1>HEADER</h1>
        <img src="#" alt="header-logo" />
        <button class="header-button">menu</button>
      </div>
    </div>
  </div>`,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
    `
      .header {
        width: 100%;
        height: 100px;
        background-color: wheat;
      }
    `,
  ],
})
export class HeaderComponent {}
