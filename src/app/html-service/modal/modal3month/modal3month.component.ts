import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal3month',
  templateUrl: './modal3month.component.html',
  styleUrls: ['./modal3month.component.scss'],
})
export class Modal3monthComponent  implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
