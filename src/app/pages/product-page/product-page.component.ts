import { Component } from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {CreateProductComponent} from "../../components/create-product/create-product.component";
import {FilterProductsPipe} from "../../pipes/filter-products.pipe";
import {ModalComponent} from "../../components/modal/modal.component";
import {ProductComponent} from "../../components/product/product.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    AsyncPipe,
    CreateProductComponent,
    FilterProductsPipe,
    ModalComponent,
    NgForOf,
    NgIf,
    ProductComponent,
    ReactiveFormsModule,
    TitleCasePipe,
    FormsModule
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  title = 'angular project';
  /*products: IProduct[] = []*/
  loading = false
  //products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    /*this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )*/
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
