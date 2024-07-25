import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {ProductComponent} from "../app/components/product/product.component";
import {IProduct} from "./models/product";
import {ProductService} from "./services/product.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular project';
  /*products: IProduct[] = []*/
  loading = false
  products$: Observable<IProduct[]>

  constructor(private productsService: ProductService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    /*this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })*/
  }
}
