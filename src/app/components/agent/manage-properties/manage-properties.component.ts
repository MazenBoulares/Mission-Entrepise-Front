import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListingService } from 'src/app/services/listing.service';
import { PropertyService } from 'src/app/services/property.service';
import { EditUserDetailsModalComponent } from 'src/app/shared/components/common/modal/edit-user-details-modal/edit-user-details-modal.component';
import { EditUserEmailModalComponent } from 'src/app/shared/components/common/modal/edit-user-email-modal/edit-user-email-modal.component';
import { EditUserPasswordModalComponent } from 'src/app/shared/components/common/modal/edit-user-password-modal/edit-user-password-modal.component';

@Component({
  selector: 'app-manage-properties',

  templateUrl: './manage-properties.component.html',
  styleUrl: './manage-properties.component.scss'
})
export class ManagePropertiesComponent {
  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Add Property';
  public parent = 'Home';
  public child = 'Add Property';
  public test = 'test';
  constructor(
    private modal: NgbModal,
    private propertyService: PropertyService,
    private listingService :ListingService
    ) {

  }
 

  editDetails() {
    this.modal.open(EditUserDetailsModalComponent, { size: 'lg', centered: true })
  }

  editEmail() {
    this.modal.open(EditUserEmailModalComponent, {
      centered: true,
    });
  }

  editPassword() {
    this.modal.open(EditUserPasswordModalComponent, {

      centered: true,
    });
  }
}
