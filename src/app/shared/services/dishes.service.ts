import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {filter, map, scan, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  basket = new Map();
  observer: IntersectionObserver;
  options = {
    threshold: [0.5]
  };
  dishLength;

  restaurantBasket$: BehaviorSubject<any> = new BehaviorSubject<any>(null); // todo create Interface to Menu item
  restaurantMenu: Observable<any>;
  private restaurantMenu$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private baseUrl = 'http://localhost:3100';

  constructor(private http: HttpClient) {
    this.restaurantMenu = this.restaurantMenu$.asObservable();
    this.getPartOfDishes().subscribe(data => {
      this.dishLength = data.length;
      console.log(data);
    });

    this.observer = new IntersectionObserver(this.getPartOfDishes.bind(this, this.dishLength ), this.options);
    // this.getAllDishes().subscribe(data => console.log(data));
  }

  getPartOfDishes(offset: number = 0): Observable<any> {
    return this.getAllDishes().pipe(
      map( (dish) => {
        console.log(dish);
        return dish.slice(offset, 6);
      })
    );
  }

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
