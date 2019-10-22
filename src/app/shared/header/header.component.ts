import { Component, OnInit } from '@angular/core';
import {DishesService} from '../services/dishes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basket;

  constructor(private dishService: DishesService ) { }

  ngOnInit() {
    this.dishService.restaurantBasket$.asObservable().subscribe(
      basket => {
        this.basket = basket;
        console.log(this.basket);
      }
    );
  }

}
