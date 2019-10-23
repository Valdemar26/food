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

  constructor(private dishService: DishesService) { }

  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.dishService.restaurantBasket$.subscribe( (data) => {
      this.dishes = [...data];
      console.log('data: ', this.dishes);
    });
  }

}
