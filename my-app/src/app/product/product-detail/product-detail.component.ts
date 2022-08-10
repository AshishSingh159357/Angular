import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  product:Product|undefined; // data from parent component

  @Output()
  addToCart =new EventEmitter<string>() // sends data to parent component


  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.addToCart.emit("Product is added to cart")
  }

}
