import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44384/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetailDto>>{
    let newPath =this.apiUrl+"cars/getall";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
    
  getCarsByBrand(id:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath =this.apiUrl+"cars/getcarsbybrand?id="+id
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

  carDetailList():Observable<ListResponseModel<CarDetailDto>>{
    let newPath =this.apiUrl+"cars/getallcardetail";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

}

