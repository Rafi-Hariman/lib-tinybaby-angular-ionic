import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-svchome',
  templateUrl: './svchome.component.html',
  styleUrls: ['./svchome.component.scss'],
})
export class SvchomeComponent implements OnInit {


  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private fb: FormBuilder
  ) {

  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Redirect to mail',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-green-blue',
    });
    toast.present();
  }

  async presentToastInvalid() {
    const toast = await this.toastController.create({
      message: 'Gunakan email lengkap',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-red-orange',
    });
    toast.present();
  }

  ngOnInit() {

  }


}
