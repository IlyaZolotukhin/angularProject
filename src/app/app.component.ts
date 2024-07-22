import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, TitleCasePipe} from "@angular/common";
import {ProductComponent} from "../app/components/product/product.component";
import {IProduct} from "./models/product";
import {products as data} from "./data/products";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular project';

  products: IProduct[] = data
}
