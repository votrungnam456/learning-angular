import { Component } from '@angular/core';
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
})
export class AppComponent {
  title = 'homes';
}
