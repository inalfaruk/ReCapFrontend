import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44384/api/rentals/"
  constructor(private httpClient:HttpClient) { }

 

  GetRentList():Observable<ListResponseModel<RentalDetailDto>>{
    let newPath=this.apiUrl+"getrentlist"
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  }
    
}

