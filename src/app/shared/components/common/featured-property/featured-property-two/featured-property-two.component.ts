import { Component, Input } from '@angular/core';
import { Gallery, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { PropertyService } from '../../../../../shared/services/property.service';
import { featuredProperty } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-featured-property-two',
  templateUrl: './featured-property-two.component.html',
  styleUrls: ['./featured-property-two.component.scss'],
})
export class FeaturedPropertyTwoComponent {

  @Input() featuredProperty: featuredProperty[];
  @Input() tagClass: string;

  constructor(public gallery: Gallery, public lightbox: Lightbox, public propertyService: PropertyService){}

  ngOnInit(){}

  public Options = {
    loop: true,
    mouseDrag: false,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  openLightBox(url: string){
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open()
    lightboxRef.load([new ImageItem({src: url, thumb: url})])
  }

}
