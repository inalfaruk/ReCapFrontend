import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  cardto :CarDetailDto[]=[];
  dataLoaded=false;
 

 
  constructor(private carService:CarService,
  private activatedRoute:ActivatedRoute) {}


  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{

      
      if(params["id"]){

        this.getCarsByBrand(params["id"])
      }
      else { 
        this.carDetailList();
      }
      
   })

  }



  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cardto=response.data;
     
    })
  }


  getCarsByBrand(id:number){
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.cardto=response.data;
      this.dataLoaded=true;
      
    })
  }

  carDetailList(){
    this.carService.carDetailList().subscribe(response=>{
      this.cardto=response.data; 
      this.dataLoaded=true;
  })

}
}
