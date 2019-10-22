import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { DishInterface } from '../interfaces/dish.interface';
import { SlideInOutAnimation } from './animations';
import { Observable } from 'rxjs';
import {CounterComponent} from '../components/counter/counter.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  animations: [SlideInOutAnimation]
})
export class RestaurantComponent implements OnInit {
  @ViewChildren('counterComponent') listOfCounterComponents: QueryList<CounterComponent>;

  dishes$: Observable<DishInterface[]>;
  dishesMenuName: any;

  animationState = 'out';

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
    this.getAllDishes();
    this.dishesMenuName = this.dishesService.getMenuItems();
  }

  getAllDishes() {
    this.dishes$ = this.dishesService.getAllDishes();
  }

  chooseDishType(type) {
    this.dishes$ = this.dishesService.getDishByType(type);
  }

  toggleMenu(divName: string) {
    if (divName === 'accordion') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }

  addToRestaurantBasket(dish, index) {

    this.listOfCounterComponents.toArray().forEach((counterComponent, componentIndex) => {
      if (index === componentIndex) {
        const count = counterComponent.counter.getValue();
        counterComponent.counter.next(null);
        this.dishesService.addToRestaurantBasket(dish, count);
      } else {
        return null;
      }
    });
  }


}
