import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-nav-logged',
  templateUrl: './nav-logged.component.html',
  styleUrls: ['./nav-logged.component.css']
})
export class NavLoggedComponent implements OnInit {
  constructor(public jwtHelper: JwtHelperService, public auth: AuthService) {

  }

  ngOnInit(): void {
  }

  logout():void{
    localStorage.removeItem('token');
  }
}
