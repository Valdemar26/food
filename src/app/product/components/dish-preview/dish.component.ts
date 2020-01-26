import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, first, switchMap, tap } from 'rxjs/operators';
import { DishInterface } from '../../interfaces/dish.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit, OnDestroy, AfterViewInit {
  dish: DishInterface;
  subscription: Subscription = new Subscription();
  rootLocation;
  @ViewChildren('counterComponent') listOfCounterComponents: QueryList<CounterComponent>;

  constructor(
    private dishesService: DishesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDishType();

    const dish$ = this.route.paramMap.pipe(
      first(),
      switchMap((param) => {
        return this.dishesService.getDishById( param.get('type'), +param.get('id'));
      })
    ).subscribe(dish => this.dish = dish);

    this.subscription.add(dish$);
  }

  ngAfterViewInit() {
    window.scroll(0, 0);
  }

  getDishType() {

    switch (this.route.snapshot.params.type) {
      case 'breakfast': this.rootLocation = 'Сніданок';
                        break;
      case 'soups': this.rootLocation = 'Супи';
                    break;
      case 'bruskety': this.rootLocation = 'Брускети';
                       break;
      case 'salads': this.rootLocation = 'Салати';
                     break;
      case 'spring-roll': this.rootLocation = 'Спрінг-роли';
                          break;
      case 'deserts': this.rootLocation = 'Десерти';
                      break;
      case 'drinks': this.rootLocation = 'Напої';
                     break;
    }
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToRestaurantBasket(dish, count = 2) {
    this.dishesService.addToRestaurantBasket(dish, count);
  }
}

