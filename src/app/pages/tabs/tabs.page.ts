import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

// Type guard to ensure the event is a NavigationEnd
function isNavigationEnd(event: RouterEvent): event is NavigationEnd {
  return event instanceof NavigationEnd;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, AfterViewInit {

  @ViewChild('tabs', { static: false }) tabs: IonTabs | undefined;
  @ViewChild('menuBar') menuBar!: ElementRef;
  @ViewChild('menuIndicator') menuIndicator!: ElementRef;
  isLandingPage: boolean = false;

  constructor(private router: Router, private titleService: Title) {
    this.router.events.pipe(
      filter(isNavigationEnd)  // Use the type guard here
    ).subscribe((event: NavigationEnd) => {
      this.checkUrl(event.urlAfterRedirects);
      this.updateTitle(event.urlAfterRedirects);
    });
  }

  ngOnInit(): void {
    this.isLandingPage = false;  
  }

  ngAfterViewInit() {
    this.setInitialMenuIndicatorPosition();
  }

  setInitialMenuIndicatorPosition() {
    const currentUrl = this.router.url;
    const menuItems = this.menuBar.nativeElement.querySelectorAll('.sc-menu-item');
    const menuItemsArray = Array.from(menuItems) as HTMLElement[];
    const targetItem = menuItemsArray.find((item: HTMLElement) => {
      return item.getAttribute('href') === currentUrl;
    });

    if (targetItem) {
      targetItem.classList.add('sc-current');
      this.updateIndicatorPosition(targetItem);
    }
  }

  selectMenu(event: Event, index: number) {
    let targetUrl: string;

    switch(index) {
      case 0: targetUrl = '/page/data'; break;
      case 1: targetUrl = '/page/baby'; break;
      case 2: targetUrl = '/page/home'; break;
      case 3: targetUrl = '/page/target'; break;
      case 4: targetUrl = '/page/settings'; break;
      default: return;
    }

    this.router.navigate([targetUrl]);
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    this.updateIndicatorPosition(target);

    this.menuBar.nativeElement.querySelectorAll('.sc-menu-item').forEach((item: HTMLElement) => {
      item.classList.remove('sc-current');
    });
    target.classList.add('sc-current');
  }

  updateIndicatorPosition(element: HTMLElement) {
    const menuPosition = element.offsetLeft - 16;
    this.menuIndicator.nativeElement.style.left = `${menuPosition}px`;
    this.menuBar.nativeElement.style.backgroundPosition = `${menuPosition - 8}px`;
  }

  checkUrl(url: string) {
    this.isLandingPage = url.includes('/landing');
    if (!this.isLandingPage) {
      const index = this.getMenuIndexFromUrl(url);
      const menuItems = this.menuBar.nativeElement.querySelectorAll('.sc-menu-item');
      this.selectMenuByIndex(menuItems, index);
    }
  }

  getMenuIndexFromUrl(url: string): number {
    if (url.includes('/data')) return 0;
    if (url.includes('/baby')) return 1;
    if (url.includes('/home')) return 2;
    if (url.includes('/target')) return 3;
    if (url.includes('/settings')) return 4;
    return -1;
  }

  selectMenuByIndex(menuItems: NodeListOf<HTMLElement>, index: number) {
    if (index >= 0 && index < menuItems.length) {
      const target = menuItems[index];
      this.updateIndicatorPosition(target);

      menuItems.forEach((item: HTMLElement) => {
        item.classList.remove('sc-current');
      });
      target.classList.add('sc-current');
    }
  }

  updateTitle(url: string) {
    let pageTitle = 'Tiny Baby Grow';

    if (url.includes('/data')) pageTitle = 'Data - Tiny Baby Grow';
    else if (url.includes('/baby')) pageTitle = 'Baby - Tiny Baby Grow';
    else if (url.includes('/home')) pageTitle = 'Home - Tiny Baby Grow';
    else if (url.includes('/target')) pageTitle = 'Target - Tiny Baby Grow';
    else if (url.includes('/settings')) pageTitle = 'Settings - Tiny Baby Grow';

    this.titleService.setTitle(pageTitle);
  }
}
