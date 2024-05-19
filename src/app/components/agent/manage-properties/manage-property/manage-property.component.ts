import { Component, EventEmitter, Output } from '@angular/core';
import { Route } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from 'express';
import { ListingService } from 'src/app/services/listing.service';
import { PropertyService } from 'src/app/services/property.service';
import { EditUserDetailsModalComponent } from 'src/app/shared/components/common/modal/edit-user-details-modal/edit-user-details-modal.component';
import { EditUserEmailModalComponent } from 'src/app/shared/components/common/modal/edit-user-email-modal/edit-user-email-modal.component';
import { EditUserPasswordModalComponent } from 'src/app/shared/components/common/modal/edit-user-password-modal/edit-user-password-modal.component';
import { latestForRent, pagination } from 'src/app/shared/interface/property';

@Component({
  selector: 'app-manage-property',
  templateUrl: './manage-property.component.html',
  styleUrl: './manage-property.component.scss'
})
export class ManagePropertyComponent {
  public latestForRentData: latestForRent[];
  @Output() paginationData = new EventEmitter<pagination>();
  public paginate: any = {}; // Pagination use only
  public pageNo: number = 1;
  constructor(
    private modal: NgbModal,
    private propertyService: PropertyService,
    private listingService :ListingService,
    // private router:Router
    ) {

  }
  ngOnInit() {
    this.fetchListings();

  }
  private async fetchListings() {
    try {
      const response = await this.listingService.getAllListing().toPromise();
      this.latestForRentData = response.map(this.mapToListing).filter(Boolean);
      // this.paginate = this.propertyService.getPager(this.latestForRentData?.length, +this.pageNo);
      // this.paginationData.emit(this.paginate);

      // this.latestForRentData = this.latestForRentData?.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  }

  // setPage(page: number) {
  //   this.router.navigate([], {
  //     relativeTo: this.route,
  //     queryParams: { page: page },
  //     queryParamsHandling: 'merge',
  //     skipLocationChange: false,
  //   });
  // }
  editDetails() {
    this.modal.open(EditUserDetailsModalComponent, { size: 'lg', centered: true})
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
  private mapToListing(item: any): latestForRent {
    // Perform mapping of backend data to front-end model latestForRent
    // Example:
    return {
      id: item.listingId,
      type: item.listingType,
      img: item.property.propertyImagesUrl.map((image: { imageUrl: any; }) => ({ url: image.imageUrl })),
      thumbnail: item.property.propertyImagesUrl[0].imageUrl, // Assuming first image is thumbnail
      propertyStatus: item.listingStatus,
      country: item.property.address.addressCountry,
      title: item.listingTitle,
      price: item.price,
      details: item.listingDescription,
      home: item.property.propertyType, // You need to specify where this data comes from
      bed: item.property.propertyBedrooms.toString(),
      bath: item.property.propertyBathrooms.toString(),
      sqft: item.property.propertySurface,
      rooms: item.property.propertyBedrooms,
      date: item.listingCreationDate ? item.listingCreationDate.join('/') : '', // Assuming date is an array [year, month, day]
      propertyType: item.property.propertyType,
      agencies: '', // You need to specify where this data comes from
      labels:item.listingType === 'SALE'? ['sale']:item.listingType==='RENT'?['rent']:['roommate'], // You need to specify where this data comes from
      sale: item.listingType === 'SALE',
      rent: item.listingType === 'RENT',
      roommate: item.listingType === 'ROOMMATE',
      fees: false, // You need to specify where this data comes from
      openHouse: false, // You need to specify where this data comes from
      sold: item.listingStatus === 'SOLD',
    };
  }
}
