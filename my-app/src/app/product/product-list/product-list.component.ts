import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 /* products:Product[]=[
    {
      id:1001,
      name:"Laptop",
      brand:"Lenovo",
      price:543000.00
    },
    {
      id:1002,
      name:"Laptop",
      brand:"Dell",
      price:43000.00
    },
    {
      id:1003,
      name:"Mobile",
      brand:"vivo",
      price:13000.00
    }

  ];*/
  products:Product[]|undefined;

  selectedProduct:Product|undefined;

  // injecting service into component
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data)=>{
      this.products=data

    },
    //(error)=>this.mes
    )
  }

  selectProduct(product:Product){
    this.selectedProduct=product;
  }

  showCartMessage(event:any){
    alert(event);
  }

}
