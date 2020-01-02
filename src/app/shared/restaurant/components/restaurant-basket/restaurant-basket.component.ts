import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import domToImage from 'dom-to-image';

import { DishesService } from '../../../services/dishes.service';
import { DishInterface } from '../../../interfaces/dish.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-basket',
  templateUrl: './restaurant-basket.component.html',
  styleUrls: ['./restaurant-basket.component.scss']
})
export class RestaurantBasketComponent implements OnInit, OnDestroy {
  dishes: DishInterface[];
  arrayOfDishes;
  orderRestaurantForm: FormGroup;
  isAdmin: boolean;

  @ViewChild('personalData', { read: ViewContainerRef, static: false }) container;
  componentRef: ComponentRef<any>;

  constructor(private dishService: DishesService, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.getDishes();
    this.initForm();
    this.isAdmin = true;
  }

  domToImage(event) {
    console.log(event);
    const node = document.getElementById('node');
    console.log(node);

    domToImage.toPng(node)
      .then( (dataUrl) => {
        console.log('dataUrl: ', dataUrl);
        const img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch( (error) => {
        console.error('oops, something went wrong!', error);
      });
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

  initForm() {
    this.orderRestaurantForm = new FormGroup({
      name: new FormControl('', [ Validators.required ] ),
      phone: new FormControl('', [ Validators.required] ),
      email: new FormControl('', [ Validators.required, Validators.email]),
      street: new FormControl('', [ Validators.required] ),
      build: new FormControl('', [ Validators.required] )
    });
  }

  onSubmit() {
    if (this.orderRestaurantForm.value) {
      const person = this.orderRestaurantForm.value;
      const order = this.dishService.restaurantBasket$.getValue();
      console.log([...order][0]);
      this.dishService.sendRestaurantOrderToEmail( person, [...order][0] );

      this.orderRestaurantForm.reset();
    }
  }

  // createComponent(type) {
  //   this.container.clear();
  //   console.log(this.container);
  //   const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PersonalDataComponent);
  //   this.componentRef = this.container.createComponent(factory);
  //
  //   this.componentRef.instance.type = type;
  //
  //   this.componentRef.instance.output.subscribe(event => console.log(event));
  // }

  ngOnDestroy() {
    // this.componentRef.destroy();
  }

}
