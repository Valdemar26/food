import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  lat = 49.848485;
  lng = 24.020991;

  private points = [
    {
      lat: 49.948485,
      lng: 24.120991
    },
    {
      lat: 49.748487,
      lng: 24.220993
    },
    {
      lat: 49.648483,
      lng: 24.420998
    }
  ];
  constructor() { }

  ngOnInit() {}

}
