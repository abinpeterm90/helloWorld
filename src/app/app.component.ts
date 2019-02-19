import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "ttyy";
  greet(name){
    alert("welcome "+name);
  };
  data:string[]=["one","two"];
}
