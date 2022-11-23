import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr-prof',
  templateUrl: './qr-prof.page.html',
  styleUrls: ['./qr-prof.page.scss'],
})
export class QrProfPage implements OnInit {

  qrCodeString:any;
  scannedResult:any;

  handlerMessage='';
  roleMessage='';

  constructor(private menuController: MenuController , private alertController: AlertController) { }

  usuario={
    nom:'',
  }

  ngOnInit() {
  }


  generaScan(){
    this.qrCodeString= this.usuario.nom;

  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async abrirCamara(){
    const alert = await this.alertController.create({
      header: 'Generando código',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
