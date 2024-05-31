import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-property-slider',
  templateUrl: './property-slider.component.html',
  styleUrls: ['./property-slider.component.scss'],
})
export class PropertySliderComponent {

  @Input() propertyData: any;

  public activeClass = 'about';
  public navFixed: boolean = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;

    if (number > 500) {
      this.navFixed = true;
    } else {
      this.navFixed = false;
    }
    if (number < 850) {
      this.activeClass = 'about';
    }
    if (number > 850) {
      this.activeClass = 'feature';
    }
    if (number > 1110) {
      this.activeClass = 'gallery';
    }
    if (number > 2000) {
      this.activeClass = 'video';
    }
    if (number > 2750) {
      this.activeClass = 'details';
    }
    if (number > 3120) {
      this.activeClass = 'floor_plan';
    }
    if (number > 3870) {
      this.activeClass = 'location';
    }
    if (number > 4450) {
      this.activeClass = 'review';
    }
  }

  setPage(value: string) {
    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
    this.activeClass = value;
  }
}
