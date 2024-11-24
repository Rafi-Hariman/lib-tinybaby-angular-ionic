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

  slides = [
    {
      class: 'slide-1',
      imgSrc: '../assets/image/bayi-3-bulan.jpeg',
      code: 'Usia 0 sampai 3 bulan',
      title: 'Motorik halus',
      text: 'Pada umur dibawah 4 bulan, bayi mampu menggerakkan kepala dari satu sisi ke sisi lain,',
      buttonClass: 'btn-1',
      isAction: true
    },
    {
      class: 'slide-2',
      imgSrc: '../assets/image/bayi-6-bulan.jpeg',
      code: 'Usia 4 sampai 6 bulan',
      title: 'Motorik halus',
      text: 'Bayi mampu menggerakkan kepala sepenuhnya, menggenggam benda dalam beberapa detik, mengarahkan matanya pada benda kecil, dan menjangkau mainan yang berjarak dengannya.',
      buttonClass: 'btn-2',
      isAction: true
    },
    {
      class: 'slide-3',
      imgSrc: '../assets/image/detail-bayi-9.jpeg',
      code: 'Usia 7 sampai 9 bulan',
      title: 'Motorik halus',
      text: 'Bayi mampu memindahkan benda dari satu tangan ke tangan lainnya, memungut dua benda sekaligus dengan masing-masing tangan memegang satu benda, dan memungut benda sebesar kacang dengan cara meraup.',
      buttonClass: 'btn-3',
      isAction: true
    },
    {
      class: 'slide-4',
      imgSrc: '../assets/image/12.jpeg',
      code: 'Usia 10 sampai 12 bulan',
      title: 'Motorik halus',
      text: 'Bayi akan memasukkan benda yang disukai ke mulut serta bayi mampu memegang benda kecil dengan erat',
      buttonClass: 'btn-4',
      isAction: true
    },
    {
      class: 'slide-5',
      imgSrc: '../assets/image/detail-bayi-18.jpeg',
      code: 'Usia 13 sampai 18 bulan',
      title: 'Motorik halus',
      text: 'Bayi mampu menumpuk dua kubus atau dua benda menjadi satu.',
      buttonClass: 'btn-5',
      isAction: true
    },
    {
      class: 'slide-6',
      imgSrc: '../assets/image/36.jpeg',
      code: 'Usia 19 sampai 24 bulan',
      title: 'Motorik halus',
      text: 'mampu menumpuk empat buah kubus menjadi satu, memungut benda kecil menggunakan ibu jari dan jari telunjuk, serta menggelindingkan bola ke arah sasaran.',
      buttonClass: 'btn-6',
      isAction: true
    },
    {
      class: 'slide-7',
      imgSrc: '../assets/image/bayi-24.jpg',
      code: 'Usia 25 sampai 36 bulan',
      title: 'Motorik halus',
      text: 'Bayi mampu mencoret-coret kertas dengan pensil',
      buttonClass: 'btn-7',
      isAction: true
    },
  ];

  async openReadMoreModal(slide: any) {
    const modal = await this.modalController.create({
      component: Modal3monthComponent,
      cssClass: 'custom-modal-class',
      componentProps: {
        data: slide.buttonClass
      }
    });
  
    return await modal.present();
  }

}
