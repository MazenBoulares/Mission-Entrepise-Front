import { Component, EventEmitter, Output } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-common-leaflet-map',
  templateUrl: './common-leaflet-map.component.html',
  styleUrls: ['./common-leaflet-map.component.scss']
})
export class CommonLeafletMapComponent {
  @Output() markerCoordinates = new EventEmitter<{ latitude : number, longitude: number }>();

  public map: L.Map;
  public markers: L.Marker[] = [];
  public marker: L.Marker;

  public options: L.MapOptions = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 12,
    center: L.latLng(20.5937, 78.9629),
  };

  constructor(){}
  initMarkers() {
    // Static Data For Map Markers
    const initialMarkers: any[] = [
      // {
      //       name: 'Sea Breezes',
      //       position: [25.206426, 55.346465],
      //       map_image_url: 'assets/images/property/15.jpg',
      //       price: '$1200',
      //       label: 'for sale',
      //       bed: '4',
      //       bath: '4',
      //       sqft: '5000',
      //       draggable: true
      //   },
    ];

    initialMarkers.forEach((data, index) => {
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<div class="infoBox"><div class="marker-detail"><img src="${data.map_image_url}" alt="Image"><div class="label label-shadow">${data.label}</div><div class="detail-part"><h6>${data.name}</h6><ul><li>Bed : ${data.bed}</li><li>Baths : ${data.bath}</li><li>Sq Ft : ${data.sqft}</li></ul><span>${data.price}</span><a href="javascript:void(0)" rel="noopener noreferrer"></a></div></div></div> `);
      this.map.panTo(data.position);
      this.markers.push(marker);
    });

      L.Icon.Default.mergeOptions({
        iconUrl: 'assets/images/leaflet/marker-icon.png',
        shadowUrl: 'assets/images/leaflet/marker-shadow.png'
    });
  }

  generateMarker(data: { position: L.LatLngExpression; draggable: boolean }, index: number) {
    return L.marker(data.position, { draggable: data.draggable })
      .on('click', (event: L.LeafletMouseEvent) => this.markerClicked(event, index))
      .on('dragend', (event: any) => this.markerDragEnd(event, index));
  }

  onMapReady($event: L.Map) {
    this.map = $event;
    // Locate user's current location
    this.map.locate({ setView: true, maxZoom: 15 });
    this.initMarkers();
    this.map.on('locationfound', (e) => {
      this.map.setView(e.latlng, 15);
      console.log('Current Location:', e.latlng);
    });
    this.map.on('click', (e) => this.onMapClick(e));
    // this.initMarkers();
  }

  onMapClick(event: L.LeafletMouseEvent) {
    if (!this.marker) {
      this.marker = L.marker(event.latlng, { draggable: true }).addTo(this.map);
      this.marker.on('click', () => this.deleteMarker());
      this.logCoordinates(event.latlng);

    } else {
      this.map.removeLayer(this.marker);
      this.marker = L.marker(event.latlng, { draggable: true }).addTo(this.map);
      this.marker.on('click', () => this.deleteMarker());
      this.logCoordinates(event.latlng);
    }
  }
  deleteMarker() {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
  }

  logCoordinates(latlng: L.LatLng) {
    console.log('Coordinates:', latlng.lat, latlng.lng);
    this.markerCoordinates.emit({ latitude : latlng.lat, longitude: latlng.lng });

  }
  mapClicked($event: L.LeafletMouseEvent) {}

  markerClicked($event: L.LeafletMouseEvent, index: number) {}

  markerDragEnd($event: L.LeafletMouseEvent, index: number) {}
}
