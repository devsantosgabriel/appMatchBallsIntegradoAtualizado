import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edita-perfil',
  templateUrl: './edita-perfil.page.html',
  styleUrls: ['./edita-perfil.page.scss'],
})
export class EditaPerfilPage implements OnInit {
  constructor(private navCtrl : NavController, private alertController: AlertController) {

   
  }


  ngOnInit() {

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Alterações Salva com Sucesso',
      buttons: ['OK'],
    });
    this.navCtrl.navigateRoot('home')
    await alert.present();
  }
  ngAfterViewInit() {
    // O código é executado após o carregamento completo do DOM
  }

  exibirImagem(event: any) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = document.createElement('img');
        image.style.setProperty("width",'auto');
        image.style.setProperty("height",'100%');
        image.style.setProperty("position",'relative');
        image.style.setProperty('object-fit','cover')
        image.style.setProperty('border-radius', '10px');
        image.src = e.target.result;
        const imageContainer = document.getElementById('imageContainer');
        const imageContainer1 = document.getElementById('imageContainer1');
        const existingImage = imageContainer?.querySelector('img'); // Verifica se já existe uma imagem na div
  
        if (existingImage) {
          // Se já existe uma imagem, atualize o src
          existingImage.src = image.src;
        } else if (imageContainer) {
          // Se não há uma imagem, adicione a nova imagem à div
          imageContainer.appendChild(image);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  exibirImagem1(event: any) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = document.createElement('img');
        image.style.setProperty("width",'auto');
        image.style.setProperty("height",'100%');
        image.style.setProperty("position",'relative');
        image.style.setProperty('object-fit','cover')
        image.style.setProperty('border-radius', '10px');
        image.src = e.target.result;
        const imageContainer1 = document.getElementById('imageContainer1');
        const existingImage = imageContainer1?.querySelector('img'); // Verifica se já existe uma imagem na div
  
        if (existingImage) {
          // Se já existe uma imagem, atualize o src
          existingImage.src = image.src;
        } else if (imageContainer1) {
          // Se não há uma imagem, adicione a nova imagem à div
          imageContainer1.appendChild(image);
        }
      };
      reader.readAsDataURL(file);
    }
  }
  

  exibirImagem2(event: any) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = document.createElement('img');
        image.style.setProperty("width",'100%');
        image.style.setProperty("height",'100%');
        image.style.setProperty("position",'relative');
        image.style.setProperty('object-fit','cover');
        image.style.setProperty('border-radius', '10px');
        image.src = e.target.result;
        const imageContainer2 = document.getElementById('imageContainer2');
        const existingImage = imageContainer2?.querySelector('img'); // Verifica se já existe uma imagem na div
  
        if (existingImage) {
          // Se já existe uma imagem, atualize o src
          existingImage.src = image.src;
        } else if (imageContainer2) {
          // Se não há uma imagem, adicione a nova imagem à div
          imageContainer2.appendChild(image);
        }
      };
      reader.readAsDataURL(file);
    }
  }
  


  irPraHome(){
    this.navCtrl.navigateRoot('home')
  }
  irParaTab1(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
  irParaTab2(){
    this.navCtrl.navigateRoot('/tabs/tab2');
  }
  irParaTab3(){
    this.navCtrl.navigateRoot('/tabs/tab3');
  }
  irParaTab4(){
    this.navCtrl.navigateRoot('/tabs/tab4');
  }

}
  
