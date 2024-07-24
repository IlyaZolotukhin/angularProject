import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, NgForOf, TitleCasePipe} from "@angular/common";
import {ProductComponent} from "../app/components/product/product.component";
import {IProduct} from "./models/product";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular project';

  products: IProduct[] = []
  constructor(private productsService: ProductService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      console.log(products)
    })
  }
}
