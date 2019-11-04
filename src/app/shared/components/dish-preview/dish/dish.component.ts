import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DishesService } from '../../../services/dishes.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, first, switchMap, tap } from 'rxjs/operators';
import { DishInterface } from '../../../interfaces/dish.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CounterComponent } from '../../counter/counter.component';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit, OnDestroy {
  dish: DishInterface;
  subscription: Subscription = new Subscription();
  rootLocation: string;
  @ViewChildren('counterComponent') listOfCounterComponents: QueryList<CounterComponent>;

  constructor(
    private dishesService: DishesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    const dish$ = this.route.paramMap.pipe(
      first(),
      switchMap((param) => {
        return this.dishesService.getDishById( param.get('type'), +param.get('id'));
      })
    ).subscribe(dish => this.dish = dish);

    this.subscription.add(dish$);
  }

  getAllRouterEvent() {
    this.rootLocation = this.route.snapshot.data.breadcrumb;
    console.log(this.rootLocation);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToRestaurantBasket(dish, count = 2) {
    this.dishesService.addToRestaurantBasket(dish, count);
  }
}

