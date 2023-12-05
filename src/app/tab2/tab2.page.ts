import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private naveCtrl: NavController) {}

  public data = [
   'Maria',
   'João',
   'Pedro',
   'Rafael',
   'Ricardo',
   'Júnior'
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
   
  }
  
  abrirChat() {
    
    this.naveCtrl.navigateRoot('{nome}/chat');
  }


}
