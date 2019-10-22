import { Component, OnInit } from '@angular/core';
import {DishesService} from '../services/dishes.service';
import { first, map } from 'rxjs/operators';
import { DishInterface } from '../interfaces/dish.interface';
import { SlideInOutAnimation } from './animations';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  animations: [SlideInOutAnimation]
})
export class RestaurantComponent implements OnInit {
  dishes: DishInterface[];
  dishesMenuName: any = ['Все меню', 'Сніданки', 'Брускети', 'Салати', 'Супи', 'Основні', 'Бургери', 'Спрінг-роли',
    'Тар-тар', 'Десерти', 'Смузі', 'Протеїнові коктейлі'];

  animationState = 'out';

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
    this.getDishes();
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

  toggleMenu(divName: string) {
    if (divName === 'accordion') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
  }

}
