import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  
  public isMapData: boolean = false;

  openMap() {
    this.isMapData = !this.isMapData;
  }
}
