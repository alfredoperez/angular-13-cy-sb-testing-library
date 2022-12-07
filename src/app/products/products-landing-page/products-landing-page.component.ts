import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-landing-page',
  templateUrl: './products-landing-page.component.html',
  styleUrls: ['./products-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsLandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
