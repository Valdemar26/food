import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DishesService } from '../../../services/dishes.service';
import { DishInterface } from '../../../interfaces/dish.interface';
import { PersonalDataComponent } from './personal-data/personal-data.component';

@Component({
  selector: 'app-restaurant-basket',
  templateUrl: './restaurant-basket.component.html',
  styleUrls: ['./restaurant-basket.component.scss']
})
export class RestaurantBasketComponent implements OnInit, OnDestroy {
  dishes: DishInterface[];
  arrayOfDishes;

  @ViewChild('personalData', { read: ViewContainerRef, static: false }) container;
  componentRef: ComponentRef<any>;

  constructor(private dishService: DishesService, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.dishService.restaurantBasket$.subscribe( (data) => {
      if (data) {
        this.dishes = [...data];
        this.arrayOfDishes = data;
      }
    });
  }

  deleteDish(id) {
    this.arrayOfDishes.delete(id);
    console.log(this.dishes);
    this.dishService.restaurantBasket$.next(this.arrayOfDishes);
  }

  getTotalPrice() {
    if (this.arrayOfDishes) {
      return [...this.arrayOfDishes.values()].reduce((acc, item) => item.count * item.dish.price + acc, 0 );
    }
  }

  createComponent(type) {
    this.container.clear();
    console.log(this.container);
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PersonalDataComponent);
    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe(event => console.log(event));
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
