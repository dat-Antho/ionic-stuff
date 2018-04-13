var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
var MiningPage = /** @class */ (function () {
    function MiningPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    MiningPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Attention',
            message: "Voulez-vous vraiment annuler le minage en cours ?",
            buttons: [
                {
                    text: 'Non',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Oui',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    MiningPage = __decorate([
        Component({
            selector: 'page-mining',
            templateUrl: 'mining.html'
        }),
        __metadata("design:paramtypes", [NavController, AlertController])
    ], MiningPage);
    return MiningPage;
}());
export { MiningPage };
//# sourceMappingURL=mining.js.map