import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1: number = 5;
  n2: number = 2;
  picName:string= "https://www.buro247.my/thumb/670x830_0/images/CA_Nevertheless-Netflix-Kdrama-episode1-review.jpg";

  hi(name:string){
    alert("hi " + name);
  }
}
