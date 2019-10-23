import { Component, OnInit } from '@angular/core';
import {DishesService} from '../../../services/dishes.service';
import {DishInterface} from '../../../interfaces/dish.interface';

@Component({
  selector: 'app-restaurant-basket',
  templateUrl: './restaurant-basket.component.html',
  styleUrls: ['./restaurant-basket.component.scss']
})
export class RestaurantBasketComponent implements OnInit {
  dishes: DishInterface[];
  arrayOfDishes;

  constructor(private dishService: DishesService) { }

  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.dishService.restaurantBasket$.subscribe( (data) => {
      if (data) {
        this.dishes = [...data];
        this.arrayOfDishes = data;
      }
    });
  }

  deleteDish(id) {
    this.arrayOfDishes.delete(id);
    console.log(this.dishes);
    this.dishService.restaurantBasket$.next(this.arrayOfDishes);
  }

  getTotalPrice() {
    if (this.arrayOfDishes) {
      return [...this.arrayOfDishes.values()].reduce((acc, item) => item.count * item.dish.price + acc, 0 );
    }
  }

}
