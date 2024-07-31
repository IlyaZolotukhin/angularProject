import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(
    private http: HttpClient,
  private errorService: ErrorService
  ) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      delay(200)/*pipe чтоб замедлить загрузку на 0.2 сек*/,
      retry(2)/*запрос будет отправлен дважды*/,
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}

