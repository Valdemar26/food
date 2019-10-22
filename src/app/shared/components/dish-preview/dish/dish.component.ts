import {Component, OnDestroy, OnInit} from '@angular/core';
import {DishesService} from '../../../services/dishes.service';
import {ActivatedRoute} from '@angular/router';
import {first, switchMap} from 'rxjs/operators';
import {DishInterface} from '../../../interfaces/dish.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit, OnDestroy {
  dish: DishInterface;
  subscription: Subscription = new Subscription();

  constructor(
    private dishService: DishesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const dish$ = this.route.paramMap.pipe(
      first(),
      switchMap(params => this.dishService.getDishById( 'breakfast', +params.get('id')))
    ).subscribe(dish => this.dish = dish);

    this.subscription.add(dish$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
