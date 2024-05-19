import { Component } from '@angular/core';
import { featuresFooterData } from '../../../../data/footer';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})

export class FeaturesComponent {

  public featuresFooterData = featuresFooterData;
  public isFeatureData: boolean = false;

  openFeature() {
    this.isFeatureData = !this.isFeatureData;
  }
}
