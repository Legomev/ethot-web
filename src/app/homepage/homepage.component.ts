import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  title = 'Ethor';
  subtitle = 'Enjoy your experience';

  constructor() {
   }

  ngOnInit(): void {
  }

}
