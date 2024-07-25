import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, throwError} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
constructor(private  http: HttpClient) {
}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products1',{
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      delay(2000)/*pipe чтоб замедлить загрузку на 2 сек*/,
      catchError(this.errorHandler)
    )
  }

  private errorHandler(error: HttpErrorResponse) {
return throwError(() => error.message)
  }
}

