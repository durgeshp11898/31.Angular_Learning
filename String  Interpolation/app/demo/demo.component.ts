import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public batch="Angular";
  public fees =18500;

  constructor(){

  }

  DisplayDetails(){
    return "This is Web Development Batch"
  }

}
