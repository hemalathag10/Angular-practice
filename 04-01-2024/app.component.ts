// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Leave Management App</h1>
      <nav>
        <ul>
          <li><a routerLink="/employee-message">Employee</a></li>
          <li><a routerLink="/admin-message">Admin</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      div {
        padding: 20px;
      }

      nav {
        background-color: #f2f2f2;
        padding: 10px;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      li {
        display: inline;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent {}
