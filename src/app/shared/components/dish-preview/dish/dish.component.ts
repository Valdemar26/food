import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DishesService } from '../../../services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { first, switchMap } from 'rxjs/operators';
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
  @ViewChildren('counterComponent') listOfCounterComponents: QueryList<CounterComponent>;

  constructor(
    private dishesService: DishesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDishById();
    const dish$ = this.route.paramMap.pipe(
      first(),
      switchMap((params) => {
        console.log(params)
        return this.dishesService.getDishById( params.get('type'), +params.get('id'));
      })
    ).subscribe(dish => this.dish = dish);

    this.subscription.add(dish$);
  }

  getDishById() {
    console.log('router: ', this.route.snapshot.params.id);
    this.dishesService.getAllDishes().subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToRestaurantBasket(dish, count = 2) {
    console.log(dish);
    this.dishesService.addToRestaurantBasket(dish, count);
  }

}


/** TODO **\
 */
// getDishType(type: string, id: number) {
//   return this.http.get(`${this.baseUrl}/restaurant`).pipe(
//     switchMap((dish) => this.getDishById(dish[type], id)),
//   );
// }
//
// getDishById(data, id): Observable<any> {
//   return of(data).pipe(
//     filter((dish) => dish.id === id
//     ));
// }
