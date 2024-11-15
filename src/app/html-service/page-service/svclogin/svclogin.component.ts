import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-svclogin',
  templateUrl: './svclogin.component.html',
  styleUrls: ['./svclogin.component.scss'],
})
export class SvcloginComponent  implements OnInit {

  constructor(
    private routerSvc : Router
  ) { }

  ngOnInit() {}


  onNavigateRegister(): void {
    this.routerSvc.navigate(['/register']);
  }

  onNavigateHome(): void {
    this.routerSvc.navigate(['/page/home']);
  }

}
