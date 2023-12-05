import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users = [{
    photo: "/assets/photos/p1.jpg",
    name: "Juliana Fernandes",
    age: 24,
    time: "Flamengo",
    escudo:"/assets/icon/fla.png"
  },
  {
    photo: "/assets/photos/p2.jpg",
    name: "Sophia Bernardes",
    age: 20,
    time: "Botafogo",
    escudo:"/assets/icon/bota.png"
  },
  {
    photo: "/assets/photos/p3.jpg",
    name: "Ana Castro",
    age: 29,
    time: "Fluminense",
    escudo:"/assets/icon/flu.png"
  },
  {
    photo: "/assets/photos/p4.jpg",
    name: "Jessica Felicio",
    age: 29,
    time: "Vasco da Gama",
    escudo:"/assets/icon/vasco.png"
  }
];

  startX: number = 0;
  endX: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  touchStart(ev) {
    this.startX = ev.touches[0].pageX;
  }

  touchMove(ev, index) {
    let deltaX = this.startX - ev.touches[0].pageX;
    let deg = deltaX/10;
    this.endX = ev.touches[0].pageX;

    (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "translateX(" + -deltaX + "px) rotate(" + -deg + "deg)";

    if ((this.endX - this.startX )< 0) {
      (<HTMLStyleElement>document.getElementById("reject-icon")).style.opacity = String(deltaX/100);
    } else {
      (<HTMLStyleElement>document.getElementById("accept-icon")).style.opacity = String(-deltaX/100);
    }
  }

  touchEnd(index) {
    if (this.endX > 0) {
      let finalX = this.endX = this.startX;

      if (finalX > -100 && finalX < 100) {
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = ".3s";
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "translateX(0px) rotate(0deg)"

        setTimeout(() => {
          (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "0s";
        }, 350);
      } else if (finalX <= -100) {
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "1s";
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "translateX(-1000px) rotate(-30eg)"

        setTimeout(() => {
          this.users.splice(index, 1);
        }, 100);
      } else if (finalX >= 100) {
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "1s";
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "translateX(-1000px) rotate(30deg)"

        setTimeout(() => {
          this.users.splice(index, 1);
        }, 100);
      }

      this.startX = 0;
      this.endX = 0;

      (<HTMLStyleElement>document.getElementById("reject-icon")).style.opacity = "0";
      (<HTMLStyleElement>document.getElementById("accept-icon")).style.opacity = "0";
    }

  }

}