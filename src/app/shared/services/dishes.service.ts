import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {DishInterface} from '../interfaces/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllDishes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/restaurant`);
  }

  getDishType(type: string, id: number) {
    return this.http.get(`${this.baseUrl}/restaurant`).pipe(
      switchMap((dish) => dish[type]),
      filter((res: any ) => res.id === id)
    );
  }
}
