import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { AuthenticationService } from '../auth/services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../auth/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basket;
  currentUser: User;

  constructor(
    private dishService: DishesService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.dishService.restaurantBasket$.asObservable().subscribe(
      basket => {
        this.basket = basket;
        console.log(this.basket);
      }
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }

}
