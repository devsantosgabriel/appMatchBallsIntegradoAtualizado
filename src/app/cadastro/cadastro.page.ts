import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome!: string;
  email!: string;
  senha!: string;
  foto!: string;

  constructor(private navCtrl: NavController) {}

  registrar() {
    this.navCtrl.navigateRoot('tabs/tab1');
  }

  onPhotoSelected(photoUrl: any) {
    this.foto = photoUrl;
  } //evento emitido pelo pai

  ngOnInit(): void {
    
  }

}
