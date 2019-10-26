import {Component, HostListener, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
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
  isShow: boolean;
  topPosToStartShowing = 100;
  allMenu: boolean;
  activeItemMenu: any;

  constructor(private dishesService: DishesService) { }

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  ngOnInit(): void {
    this.allMenu = true;
    this.getAllDishes();
    this.dishesMenuName = this.dishesService.getMenuItems();
  }

  getAllDishes() {
    this.allMenu = true;
    this.activeItemMenu = false;
    this.dishes$ = this.dishesService.getAllDishes();
  }

  chooseDishType(type) {
    this.allMenu = false;
    this.activeItemMenu = type;
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
