import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { latestForRent, propertyDetailsData } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { propertyState } from '../../../shared/store/states/property-detail.state';
import { getPropertyDetails } from '../../../shared/store/actions/property-detail.action';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-property-image-slider',
  templateUrl: './property-image-slider.component.html',
  styleUrls: ['./property-image-slider.component.scss'],
})
export class PropertyImageSliderComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public darkHeaderLogo = 'assets/images/logo/9.png'
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public test = "test";
  public propertyDetailsData: propertyDetailsData;
  public propertyData: propertyDetailsData;
  public propertyId: number;
  public propertyDetails: latestForRent;
  public dataArray = ['about','feature','gallery','video','floor_plan','location']; 
  // made by feres
  public propertyImages: { url: string, fileType: string }[] = [];

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  @Select(propertyState.property) property$: Observable<latestForRent[]>;

  constructor(
    private propertyService: PropertyService,
    private listingService :ListingService,
    private store: Store,
    private route: ActivatedRoute)
    {
      this.route.queryParams.subscribe((params) => {
        this.propertyId = params['id'];

      })

     this.store.dispatch(new getPropertyDetails(this.propertyId));

      this.property$.subscribe((res) => {
        this.propertyDetails = res[0]
      })
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
    this.listingService.getListingById(this.propertyId).subscribe({
      next: (response)=>{
        this.propertyDetails = this.mapToListing(response)
        this.propertyDetails.img = response.property.propertyImagesUrl.map((image: { imageUrl: any; }) => ({
          url: image.imageUrl,
          fileType: 'image' // Assuming fileType is always 'image'
        }));
        console.log(this.propertyImages)
      }
    })

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;

      if (Array.isArray(this.dataArray)) {
        if (Array.isArray(response.data)) {
          this.propertyDetailsData = response.data.filter(
            (tabData: { value: string }) =>
              this.dataArray?.includes(tabData.value)
          );
          console.log(this.propertyData)
          console.log(this.propertyDetailsData)
        }
      }
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
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
