import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileDetailComponent } from '../../section/profile-detail/profile-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-svcsettings',
  templateUrl: './svcsettings.component.html',
  styleUrls: ['./svcsettings.component.scss'],
})
export class SvcsettingsComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private routerSvc: Router
  ) { }

  ngOnInit() {
  }

  async openReadMoreModal() {
    const modal = await this.modalController.create({
      component: ProfileDetailComponent,
      cssClass: 'custom-modal-class'
    });

    return await modal.present();
  }

  onNavigateLogin() {
   this.routerSvc.navigate(['/login']);
  }
}
