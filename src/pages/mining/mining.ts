import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mining',
  templateUrl: 'mining.html'
})
export class MiningPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Attention',
      message: "Voulez-vous vraiment annuler le minage en cours ?",
      
      buttons: [
        {
          text: 'Non',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Oui',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
