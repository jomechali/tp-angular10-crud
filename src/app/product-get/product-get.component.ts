import { Component, OnInit } from '@angular/core';
import Product from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products !: Product[];

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data: Product[]) => (this.products) = data)
  }

  deleteProduct(id : number, index: number){
    this.ps.deleteProduct(id).subscribe(()=>this.products.splice(index,1));
  }

}
