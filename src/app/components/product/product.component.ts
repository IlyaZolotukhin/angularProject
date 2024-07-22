import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";
import {CurrencyPipe, DecimalPipe, NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [
    DecimalPipe,
    CurrencyPipe,
    NgIf,
    NgClass,
    NgStyle
  ],
})
export class ProductComponent {
  @Input() product: IProduct

  details = false
}
