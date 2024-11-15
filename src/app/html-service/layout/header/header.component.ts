import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('popover') popover: any;

  isOpen = false;
  pageTitle: string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setPageTitle();
    });
  }

  setPageTitle() {
    const currentRoute = this.router.url.split('/')[2];
    switch (currentRoute) {
      case 'home':
        this.pageTitle = 'Home';
        break;
      case 'data':
        this.pageTitle = 'Data';
        break;
      case 'baby':
        this.pageTitle = 'Baby Information';
        break;
      case 'target':
        this.pageTitle = 'Target';
        break;
      case 'settings':
        this.pageTitle = 'Settings';
        break;
      default:
        this.pageTitle = 'Default Title';
    }
  }

  onPresentPopover() {
    this.router.navigate(['/page/chart-baby']);
  }
}
