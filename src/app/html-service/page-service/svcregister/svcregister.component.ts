import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-svcregister',
  templateUrl: './svcregister.component.html',
  styleUrls: ['./svcregister.component.scss'],
})
export class SvcregisterComponent  implements OnInit {

  constructor(
    private routerSvc : Router
  ) { }

  ngOnInit() {}


  onNavigateLogin(): void {
    this.routerSvc.navigate(['/login']);
  }

  onNavigateHome(): void {
    this.routerSvc.navigate(['/page/home']);
  }

}
