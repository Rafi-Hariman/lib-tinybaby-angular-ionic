import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalheaderprofiledetail',
  templateUrl: './modalheaderprofiledetail.component.html',
  styleUrls: ['./modalheaderprofiledetail.component.css']
})
export class ModalheaderprofiledetailComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
