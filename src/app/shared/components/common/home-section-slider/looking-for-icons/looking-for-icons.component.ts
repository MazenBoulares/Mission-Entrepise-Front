import { Component, Input } from '@angular/core';
import { lookingForData } from '../../../../data/slider-filter-search';

@Component({
  selector: 'app-looking-for-icons',
  templateUrl: './looking-for-icons.component.html',
  styleUrls: ['./looking-for-icons.component.scss']
})
export class LookingForIconsComponent {

  @Input() text : boolean = false;

  public lookingForData = lookingForData;

}
