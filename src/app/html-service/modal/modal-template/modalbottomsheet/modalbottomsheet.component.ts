import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalbottomsheet',
  templateUrl: './modalbottomsheet.component.html',
  styleUrls: ['./modalbottomsheet.component.scss'],
})
export class ModalbottomsheetComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }
}
