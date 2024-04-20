import { Component, Input } from '@angular/core';
import { gridImage } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.scss'],
})
export class Grid2Component {

  @Input() bgImage: string = 'assets/images/inner-background.jpg';
  @Input() title = 'Portfolio';
  @Input() parent = 'Home';
  @Input() child = 'Portfolio';
  @Input() type: string;

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public activeTab: string = 'all';

  public gridImagesData: gridImage[];
  public imagesData: gridImage[];

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.imagesData = response.gridImages.filter(
        (data: { fileType: string }) => data.fileType == 'image'
      );

      this.gridImagesData = response.gridImages.filter(
        (data: { fileType: string }) => data.fileType == 'image'
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  receiveChildData(data: gridImage[]) {
    this.imagesData = data;
  }
}
