import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, AfterViewInit {

  @ViewChild('page', { static: false }) tabs!: IonTabs; // Use the definite assignment assertion (`!`) operator.
  selectedTab: string | undefined;

  constructor(private routerSvc: Router) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.routerSvc.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink(event.urlAfterRedirects);
      }
    });

    if (this.routerSvc.url) {
      this.updateActiveLink(this.routerSvc.url);
    }
  }

  setCurrentTab() {
    if (this.tabs) {
      this.selectedTab = this.tabs.getSelected();
      console.log(this.selectedTab);
    }
  }

  activateLink(index: number) {
    const listItems = document.querySelectorAll('.list');
    listItems.forEach((item, idx) => {
      const icon = item.querySelector('.icon');
      if (idx === index) {
        item.classList.add('active');
        if (icon) {
          icon.classList.add('hover-active');
        }
      } else {
        item.classList.remove('active');
        if (icon) {
          icon.classList.remove('hover-active');
        }
      }
    });
  }

  isActive(index: number): boolean {
    const listItems = document.querySelectorAll('.list');
    return listItems[index]?.classList.contains('active') ?? false;
  }

  documentForm() {
    this.routerSvc.navigate(['/page/data']);
  }

  onClickBaby() {
    this.routerSvc.navigate(['/page/baby']);
  }

  onClickHome() {
    this.routerSvc.navigate(['/page/home']);
  }

  onClickPie() {
    this.routerSvc.navigate(['/page/chart-baby']);
  }

  onClickSettings() {
    this.routerSvc.navigate(['/page/settings']);
  }

  private updateActiveLink(url: string) {
    if (url.includes('/page/data')) {
      this.activateLink(0);
    } else if (url.includes('/page/baby')) {
      this.activateLink(1);
    } else if (url.includes('/page/home')) {
      this.activateLink(2);
    } else if (url.includes('/page/chart-baby')) {
      this.activateLink(3);
    } else if (url.includes('/page/settings')) {
      this.activateLink(4);
    }
  }
}
