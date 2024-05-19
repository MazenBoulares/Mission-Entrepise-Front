import { Component, Input } from '@angular/core';
import { detailsProperty, img } from '../../../../shared/interface/property';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {

  @Input() galleryImagesData: detailsProperty[];
  @Input() requestForm: boolean = false;

  public selectedImage: string;

  public Options = {
    items: 1,
    loop: true,
    nav: false,
    dots: false
  };

  public thumbnailCarouselOptions = {
    items: 5,
    margin: 10,
    center: true,
    loop: true,
    nav: false,
    dots: false,
  };

  changeImage(image: string) {
    this.selectedImage = image;
  }
}
