import { Component, OnInit } from '@angular/core';
import {DishesService} from '../services/dishes.service';
import { first, map } from 'rxjs/operators';
import { DishInterface } from '../interfaces/dish.interface';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  dishes: DishInterface[];
  isMenuOpened = false;
  dishesMenuName: any = ['Сніданки', 'Брускети', 'Салати', 'Супи', 'Основні', 'Бургери'];

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
    this.getDishes();
    console.log('RestaurantComponent');
  }

  getDishes(): void {
    this.dishesService.getAllDishes()
      .pipe(
        first(),  // first auto unsubscribe (take first element from stream)
        map(element =>  element.breakfast)
        )
        .subscribe((data: DishInterface[]) => {
          console.log(data);
          this.dishes = data;
        });
  }

  dishesMenuToggle() {
    this.isMenuOpened = !this.isMenuOpened;
  }

}
