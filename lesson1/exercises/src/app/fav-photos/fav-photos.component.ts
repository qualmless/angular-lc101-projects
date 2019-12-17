import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'All the most wondeful photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.pinimg.com/564x/df/a8/06/dfa80636b5349f3720d528e4262ced1d.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}