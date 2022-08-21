import { Component, Input, OnInit } from '@angular/core';
import { CarsoulData } from '../../modals/ui.modal';

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrls: ['./custom-banner.component.scss']
})
export class CustomBannerComponent implements OnInit {
  @Input() data: CarsoulData[] = [
		{
			"id": 1000,
			"title": "Bamboo Watch",
      "titleAr": "Bamboo Watch",
			"desc": "Product Description",
      "descAr": "",
			"image": "bamboo-watch.jpg",
			"price": 65,
			"category": "Accessories",
			"quantity": 24,
			"rating": 5
		},
		{
			"id": 1001,
			"title": "Black Watch",
      "titleAr": "Black Watch",
			"desc": "Product Description",
      "descAr": "",
			"image": "black-watch.jpg",
			"price": 72,
			"category": "Accessories",
			"quantity": 61,
			"rating": 4
		},
		{
			"id": 1002,
			"title": "Blue Band",
      "titleAr": "Blue Band",
			"desc": "Product Description",
      "descAr": "",
			"image": "blue-band.jpg",
			"price": 79,
			"category": "Fitness",
			"quantity": 2,
			"rating": 3
		},
		{
			"id": 1003,
			"title": "Blue T-Shirt",
      "titleAr": "Blue T-Shirt",
			"desc": "Product Description",
      "descAr": "",
			"image": "blue-t-shirt.jpg",
			"price": 29,
			"category": "Clothing",
			"quantity": 25,
			"rating": 5
		},
		{
			"id": 1004,
			"title": "Bracelet",
      "titleAr": "Bracelet",
			"desc": "Product Description",
      "descAr": "",
			"image": "bracelet.jpg",
			"price": 15,
			"category": "Accessories",
			"quantity": 73,
			"rating": 4
		}
	];
  @Input() responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];
  @Input() numVisible: number = 3;
  @Input() numScroll: number = 1;
  @Input() title: string;
  @Input() isBanner: boolean = false;
  @Input() showIndicators = true;

  constructor() { }

  ngOnInit(): void {
  }

}
