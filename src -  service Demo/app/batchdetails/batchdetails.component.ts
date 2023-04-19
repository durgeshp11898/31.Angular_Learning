import { Component,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent implements OnInit{

  public Batches: any=[];

  constructor(public marvellous:MarvellousService){
    
  }

  
  ngOnInit(){

      this.Batches=  this.marvellous.getBatchDetails();
  }
  
}
