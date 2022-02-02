import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit { 

  public slider: any;

  constructor(
    private _router: Router
  ) {

    this.slider = $('.slider');
  
   }

  ngOnInit(): void {

    console.log(this.slider);

    $('.slider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 700
    });

  }

  catwiki() {
    this._router.navigate(['/catwiki']);
  }

  countryquiz() {
    this._router.navigate(['/countryquiz']);
  }

}
