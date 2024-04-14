import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent {

  @Input() data: string;

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 25.276987, lng: 55.296249 },
    zoom: 6
  };

  constructor(private modal: NgbModal) {}

  modalClose() {
    this.modal.dismissAll();
  }

}
