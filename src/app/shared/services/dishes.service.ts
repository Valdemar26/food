import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  basket = new Map();

  restaurantBasket$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private baseUrl = 'http://localhost:3100';

  constructor(private http: HttpClient) { }

  getAllDishes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/restaurant`).pipe(
      map((dish) => {
        Object.entries(dish).forEach((item) => {
          if (item) {
            return item[1].forEach((innerItem) => innerItem.type = item[0]);
          }
        });
        return [...Object.values(dish)].reduce((acc, item) => {
          return [...acc, ...item ];
        } );
      })
    );
  }

  getDishById(type: string = 'breakfast', id: number) {
    return this.http.get(`${this.baseUrl}/restaurant`).pipe(
      switchMap((dish) => dish[type]),
      filter((res: any ) => res.id === id)
    );
  }

  getDishByType(type: string) {
    return this.http.get(`${this.baseUrl}/restaurant`).pipe(
      map((dish) => {
        Object.entries(dish).forEach((item) => {
          if (item) {
            return item[1].forEach((innerItem) => innerItem.type = item[0]);
          }
        });
        return type === 'all' ? dish : dish[type];
      } )
    );
  }

  addToRestaurantBasket(dishObject, count) {
    this.basket.set(dishObject.id, {count, dish: dishObject});
    this.restaurantBasket$.next(this.basket);
  }

  sendRestaurantOrderToEmail(person, order) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'Access-Control-Allow-Origin',
      })
    };
    this.http.post('http://localhost:8081/basket-restaurant', {person, order}, httpOptions).subscribe(
      res => console.log(res)
    );
  }

  getMenuItems() {
    return [
      {
        name: 'Сніданки',
        type: 'breakfast'
      },
      {
        name: 'Брускети',
        type: 'bruskety'
      },
      {
        name: 'Салати',
        type: 'salads'
      },
      {
        name: 'Супи',
        type: 'soups'
      },
      {
        name: 'Спрінг-роли',
        type: 'spring-roll'
      },
      {
        name: 'Десерти',
        type: 'deserts'
      },
      {
        name: 'Напої',
        type: 'drinks'
      }
    ];
  }
}
