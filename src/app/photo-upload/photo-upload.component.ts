import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'],
})
export class PhotoUploadComponent {
  @Output() photoSelected: EventEmitter<string> = new EventEmitter();
  //propriedade photoSelected irá receber o evento emitido pelo pai
  selectedFile!: File; //propriedade selectedFile irá receber a url do arquivo

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.photoSelected.emit(URL.createObjectURL(this.selectedFile));
  } /**Método que recebe o evento ao ser disparado, nisso 
  a propriedade selectedFile receberá uma coleção de arquivos de acordo
  com o que o usuário selecionar*/
}
