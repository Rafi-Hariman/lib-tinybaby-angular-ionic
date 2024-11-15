import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalfullsheet',
  templateUrl: './modalfullsheet.component.html',
  styleUrls: ['./modalfullsheet.component.scss'],
})
export class ModalfullsheetComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
