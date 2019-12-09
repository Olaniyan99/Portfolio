import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("home").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 }

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("home").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

}

