import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: string ;

  constructor(private _router: Router) {}

  ngOnInit() {
  }
greet() {
   alert(this.username);
   this._router.navigateByUrl('/app-greet');
}
}
