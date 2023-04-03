import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public data="Sample";

  public OnClick(){
   
    console.log("Onclick Event is Called...");
    return this.data="OnClick is Called ..."
  }

  public MyActionNew(value: any){
    console.log(value);
  }
}
