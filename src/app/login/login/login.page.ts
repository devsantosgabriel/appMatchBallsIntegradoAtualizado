import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string
  senha: string

  constructor(private navCtrl: NavController, private alertControle: AlertController) { }

  async presentAlert(){
     const alert = await this.alertControle.create({
      header: 'Alerta !!!',
      message: 'Campos não Preenchidos ou Dados Incorretos',
      buttons: ['Ok']
     });
     const email = document.getElementById('email') as HTMLInputElement
     const senha = document.getElementById('senha') as HTMLInputElement
     if(email.value == '' || senha.value == ''){
      await alert.present()
     }else{
      this.irParaTab1();
     }
     
  }
  
  irParaTab1() {
    this.navCtrl.navigateRoot('tabs/tab1');
    
  }
  fazerRegistro(){
    this.navCtrl.navigateRoot('cadastro');
  }
  ngOnInit() {

  }
}
