import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {

    public MyColor="Orange";
    public FavColor="purple";
    public IsSet=true;

    public MyClass="success";

    public data="";

    public MyAction(){
      //console.log("Submit Button Clicked ....");
      return this.data="Event Binding Clicked () Function Called...."
    }

    public MyActionNew(value: any){
      console.log(value);
    }

}
