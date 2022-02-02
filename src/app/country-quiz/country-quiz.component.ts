import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'country-quiz',
  templateUrl: './country-quiz.component.html',
  styleUrls: ['./country-quiz.component.css']
})
export class CountryQuizComponent implements OnInit {

  // Mannaging the information

  public countries: any[];
  public index: number;
  public country: any;
  public answers: any[];

  // The behaveour of the game

  public start_box: any;
  public quiz_box: any;
  public result_box: any;
  public next: any;

  public userAns: any;
  public correctAns: any[];

  public buttons: any;

  public points: number;


  constructor() {

    this.countries = [];
    this.answers= [];
    this.index = 0;

    this.userAns = "";
    this.correctAns = [];

    this.points = 0;

  }

  ngOnInit(): void {

    this.getInfo();

  }

  shuffle(array: any) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;

  }

  getInfo() {
    fetch('https://restcountries.com/v2/regionalbloc/eu')
      .then(response => response.json())
      .then(response => {
        this.countries = response;
        console.log(this.countries)
        return this.countries;
      })
      .then(response => {
        console.log(response);
        this.index = Math.floor(Math.random() * response.length);
        this.country = response[this.index];
        console.log(this.country);
        console.log(this.country.capital)
        return this.country;
      })
      .then(response => {
        this.answers= [response.capital];
        for (let i = 0; i < 4; i++) {
          this.index = Math.floor(Math.random() * this.countries.length);
          this.answers.push(this.countries[this.index].capital); 
          this.shuffle(this.answers)
        }
      })

      this.getButtons();
  }

  getButtons() {
    this.buttons = [

      document.getElementById('answer1'),
      document.getElementById('answer2'),
      document.getElementById('answer3'),
      document.getElementById('answer4'),
      document.getElementById('answer5')

      ]
  }

  start_quiz() {

    this.start_box = document.getElementById('start')
    this.start_box.style.display = 'none';
    this.quiz_box = document.getElementById('quiz');
    this.quiz_box.style.display = 'block';

    this.next = document.getElementById('next');
    this.next.setAttribute('class', 'disabled')
  }

  optionSelected(answer: any) {
    this.next.classList.remove('disabled')

    this.userAns = answer.textContent;
    this.correctAns = this.country.capital;
    console.log(this.userAns)
    console.log(this.correctAns)

    if ( this.correctAns === this.userAns) {
      answer.setAttribute('class', 'correct')
      console.log('The answer is correct')
      this.points++
    } else {
      answer.setAttribute('class', 'incorrect')
      console.log('The answer is incorrect')

    this.quiz_box.style.display = 'none';
    this.result_box = document.getElementById('result');
    this.result_box.style.display = 'block'
    }

    for (let i = 0; i < this.buttons.length; i++)
      this.buttons[i].classList.add('disabled')
  }

  nextQuest() {
    this.getInfo();

    for (let i = 0; i < this.buttons.length; i++)
      this.buttons[i].classList.remove('disabled', 'correct', 'incorrect');
  }

  restart() {
    this.points = 0;
    this.nextQuest();

    this.quiz_box.style.display = 'block';
    this.result_box.style.display = 'none';    
  }

}


