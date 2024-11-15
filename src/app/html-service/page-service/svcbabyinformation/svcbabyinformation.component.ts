import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, ToastController } from '@ionic/angular';
import Swiper from 'swiper';

import { PopoverbabyinfoComponent } from '../../layout/popoverbabyinfo/popoverbabyinfo.component';
import { Modal3monthComponent } from '../../modal/modal3month/modal3month.component';

declare function tes(): any;

@Component({
  selector: 'app-svcbabyinformation',
  templateUrl: './svcbabyinformation.component.html',
  styleUrls: ['./svcbabyinformation.component.scss'],
})
export class SvcbabyinformationComponent implements OnInit, AfterViewInit {

  constructor(
    private toastController: ToastController,
    private modalController: ModalController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      tes();
    }, 1000);
  }

  ngAfterViewInit() {
    // tes();
    this.initSwiper();
    setTimeout(() => {
      const mockEvent = {
        clientX: window.innerWidth / 2,
        clientY: 50
      };
      this.presentPopover(mockEvent);
    }, 1500);
  }

  async presentPopover(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverbabyinfoComponent,
      cssClass: 'custom-popover',
      translucent: true,
      event: event
    });
    return await popover.present();
  }

  initSwiper() {

  }

  async presentToastWa() {
    const toast = await this.toastController.create({
      message: 'Scroll left or down to see the baby information',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-twitter',
    });
    toast.present();
  }

  async openReadMoreModal() {
    const modal = await this.modalController.create({
      component: Modal3monthComponent,
      cssClass: 'custom-modal-class'  // Optional: Add a custom class for styling
    });

    return await modal.present();
  }

}
