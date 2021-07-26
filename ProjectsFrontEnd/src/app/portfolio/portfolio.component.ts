import { Component, OnInit } from '@angular/core';
import { picturesCh } from '../pictures';
import { picturesG } from '../pictures';
import { picturesP } from '../pictures';
import { picturesW } from '../pictures';
import { Router } from '@angular/router'; //link portfolio btn to Contact page

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  picturesCh = picturesCh;
  picturesG = picturesG;
  picturesP = picturesP;
  picturesW = picturesW;
  bigPicture = "";
  
  constructor(private router: Router) { }//link portfolio btn to Contact page
  goToContact () { //link portfolio btn to Contact page
    this.router.navigateByUrl('/contact');
  }

  openModal(event: any) {
    this.bigPicture = event.target.getAttribute("data")
    this.playAudio();
  }

  playAudio() {
    let audio = new Audio();
    audio.src ="../../assets/audio/1.mp3"
    audio.load();
    audio.play();
  }


  ngOnInit(): void {
  }

}
