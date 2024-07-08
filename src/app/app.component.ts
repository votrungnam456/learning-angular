import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './rent-house/components/home/home.component';
import { RentHouseComponent } from './rent-house/rent-house.component';
import { ShoppingRoutingModule } from './shopping/shopping-routing.module';
import { ShoppingModule } from './shopping/shopping.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RentHouseComponent, RouterModule, ShoppingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // đây là Internal Stylesheet
  styles: [
    `
      h1 {
        color: red;
      }
      p {
        color: blue;
      }
      h2 {
        color: green !important;
      }
    `,
  ],
  // Emulated (mặc định): Angular tạo ra các thuộc tính độc đáo cho các style của component, giúp các style này chỉ ảnh hưởng đến component đó.
  // None: Style của component sẽ ảnh hưởng đến toàn bộ ứng dụng, tương tự như global styles.
  // Shadow DOM: Sử dụng Shadow DOM của trình duyệt để áp dụng các style chỉ cho component đó.
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'homes';
}
