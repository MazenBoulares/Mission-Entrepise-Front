import { Component, Input } from '@angular/core';
import { Menu, NavService } from '../../services/nav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  @Input() icon: boolean | undefined;
  @Input() menuRight: boolean = false;

  public menuItems: Menu[] = [];
  public isOpenMenu: boolean = false;
  public open: boolean = false;

  constructor(public navServices: NavService) {
    this.navServices.items.subscribe(
      (menuItems) => (this.menuItems = menuItems)
    );
  }

  openSideMenu() {
    this.isOpenMenu = true;
  }

  closeSideMenu(){
    this.isOpenMenu = false;
  }

  openMenu(item : Menu){
    if (!item.active) {
      this.menuItems.forEach((a: Menu) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: Menu) => {
          if(b.section){
            b.section.forEach((child) => {
              if(b.section?.includes(item)){
                child.active = false;
              }

            })
          }
          if (a.children?.includes(item)) {
            b.active = false;
          }
          if (b.children) {
            b.children?.forEach((c: Menu) => {
              if (b.children?.includes(item)) {
                c.active = false;
              }
            });
          }
        });
        return;
      });
    }
    item.active =! item.active;
  }
}
