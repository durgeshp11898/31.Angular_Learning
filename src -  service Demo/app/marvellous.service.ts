import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

public getBatchDetails(){
  return [
    {"Name":"PPA","Fees":18500,"Duration":"3.5 Months"},
    {"Name":"LB","Fees":18000,"Duration":"3 Months"},
    {"Name":"ANGULAR","Fees":17000,"Duration":"5 Months"}
  ];
}

  constructor() { }
}
