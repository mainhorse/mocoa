import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content-page',
  templateUrl: './home-content-page.component.html',
  styleUrls: ['./home-content-page.component.css']
})
export class HomeContentPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facebook = 'assets/img/facebook.png';
  instagram = 'assets/img/instagram.png';
  twiter = 'assets/img/twiter.png';
  youtube = 'assets/img/youtube.png';
}
