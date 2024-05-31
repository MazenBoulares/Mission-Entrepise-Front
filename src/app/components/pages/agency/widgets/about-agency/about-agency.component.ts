import { Component, Input } from '@angular/core';
import { agency } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-about-agency',
  templateUrl: './about-agency.component.html',
  styleUrls: ['./about-agency.component.scss'],
})
export class AboutAgencyComponent {

  @Input() aboutAgency: agency;
  
}
