import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {ProductComponent} from "../app/components/product/product.component";
import {GlobalErrorComponent} from "../app/components/global-error/global-error.component";
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "../app/pipes/filter-products.pipe";
import {ModalComponent} from "../app/components/modal/modal.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, AsyncPipe,
    NgIf, GlobalErrorComponent, GlobalErrorComponent, GlobalErrorComponent,
    FormsModule, FilterProductsPipe, ModalComponent, CreateProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
