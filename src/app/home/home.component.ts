import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myNumber: number;

  public skillbar: any;
  public percent: any;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

}
