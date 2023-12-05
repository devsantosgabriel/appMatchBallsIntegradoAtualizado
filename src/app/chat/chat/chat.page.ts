import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage {

constructor(private navCtrl: NavController){}

messages: any[] = [];
newMessage: string = '';
isReplying: boolean = false;


enviarMensagem() {
  
  if (this.isReplying) {
   
    // this.envio.text = this.newMessage;
    // this.messages.push(this.envio);
    this.messages.push({ sender: 'Eu', text: this.newMessage });
    this.newMessage = '';
    this.isReplying = false;
  }
}

iniciarResposta() {
  this.isReplying = true;
 
  if (this.newMessage) {
    
    this.messages.push({ sender: 'Match', text: this.newMessage });
    this.newMessage = '';
  }
}
}