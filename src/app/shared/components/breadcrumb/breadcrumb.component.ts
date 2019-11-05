import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {DishesService} from '../../services/dishes.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  location: any;
  breadCrumb;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dishService: DishesService
    ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.breadCrumb = event.url.split('/').slice(1);
      }
    });
  }

  navigateToRoute(route) {
    // console.log('route: ', route, route.split('/')[2] ? route.split('/')[2] : null);

    // this.dishService.getDishByType()
  }

}
