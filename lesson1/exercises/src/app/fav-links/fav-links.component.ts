import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle="Just some super links";
  favLinks = ['http://instagram.com', 'http://pinterest.com'];

  constructor() { }

  ngOnInit() {
  }

}
