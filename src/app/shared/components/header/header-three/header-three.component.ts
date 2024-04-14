import { Component, Input } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LogInModalComponent } from '../../common/modal/log-in-modal/log-in-modal.component';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.scss'],
})
export class HeaderThreeComponent {

  @Input() headerLogo: string;
  @Input() darkHeaderLogo: string;
  @Input() headerClass?: string;

  public darkFooterLogo = 'assets/images/logo/9.png';

  public loginModal: boolean = false;
  public buttonClass: string = '';
  public tagClass: string = '';
  public theme: number;
  public imageURL: string;

  constructor(public layout: LayoutService, private modal: NgbModal, private router: Router) {

    if(window.location.pathname.includes('/theme/classic') ||
       window.location.pathname.includes('/theme/search-tab') ||
       window.location.pathname.includes('/theme/modern-video') ||
       window.location.pathname.includes('/theme/map-v-search') ||
       window.location.pathname.includes('/theme/map-h-search')){
      this.loginModal = true;
      this.buttonClass = 'btn-gradient color-4'
      this.tagClass = 'color-4'
      this.theme = 4;
      this.imageURL = 'assets/images/property/15.jpg';
    }
  }


  openModal() {
    if(this.loginModal == true){
      const modalRef = this.modal.open(LogInModalComponent, { centered: true, size: 'lg' });
       modalRef.componentInstance.buttonClass = this.buttonClass;
       modalRef.componentInstance.tagClass = this.tagClass;
       modalRef.componentInstance.theme = this.theme;
       modalRef.componentInstance.imageURL = this.imageURL;
    }else{
      this.router.navigate(['/page/other-pages/log-in'])
    }
  }

}
