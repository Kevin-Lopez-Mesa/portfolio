'use strict'

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

declare var $:any;


@Component({
  selector: 'catwiki',
  templateUrl: './cat-wiki.component.html',
  styleUrls: ['./cat-wiki.component.css']
})
export class CatWikiComponent implements OnInit {

  public searched_cat: any;
  public searched_cat_imgs: any;
  public searched_cat_id: any;

  public option: any;

  public cats: any;
  public cats_id: any;

  public random_cats: any;
  public random_cats_imgs: any;

  constructor(
    private sanitizer: DomSanitizer
   ) { 

    this.random_cats = [];

  }

  ngOnInit(): void {

    this.getCats();

    this.randomCats();

    $(document).ready(function(){
    console.log('jquery listo')
  })

  }

  

  getCats() {

    fetch('https://api.thecatapi.com/v1/breeds' , {
      headers: {
        'x-api-key' : '9c6948db-5806-4b6a-9f56-e8ff0bb56ea6'
      }
    })
    .then(response => response.json())
    .then(response => {
      this.cats_id = response
    })
    .catch((err) => {
      console.log('ERROR', err.message)
    }) 

  }

  randomCats() {
    fetch('https://api.thecatapi.com/v1/breeds' , {
      headers: {
        'x-api-key' : '9c6948db-5806-4b6a-9f56-e8ff0bb56ea6'
      }
    })
    .then(response => response.json())
    .then(response => {

      for(let i = 0; i < 3; i++){
       this.random_cats.push(response[Math.floor(Math.random() * 66)])
       this.random_cats[i].image.url = this.sanitizer.bypassSecurityTrustUrl(this.random_cats[i].image.url)
      }
    })
    .catch((err) => {
      console.log('ERROR', err.message)
    }) 
  }

  randomCatsTry() {
    fetch('https://api.thecatapi.com/v1/breeds' , {
      headers: {
        'x-api-key' : '9c6948db-5806-4b6a-9f56-e8ff0bb56ea6'
      }
    })
    .then(response => response.json())
    .then(response => {

      this.random_cats = []

      for(let i = 0; i < 3; i++){
       this.random_cats.push(response[Math.floor(Math.random() * 66)])
       this.random_cats[i].image.url = this.sanitizer.bypassSecurityTrustUrl(this.random_cats[i].image.url)
      }
       console.log(this.random_cats)
    })
    .catch((err) => {
      console.log('ERROR', err.message)
    }) 
  }

  searchedCat() {

    this.option = $("#search option:selected").val();

    fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + this.option +'&limit=4' , {
      headers: {
        'x-api-key' : '9c6948db-5806-4b6a-9f56-e8ff0bb56ea6'
      }
    })
    .then(response => response.json())
    .then(response => {
      this.searched_cat = response;
      this.searched_cat_imgs = this.searched_cat.map((breed: any) => breed.url);
      this.searched_cat_imgs.shift();
      console.log(this.searched_cat);
    })
    .catch((err) => {
      console.log('ERROR', err.message)
    })

  } 
  
}
