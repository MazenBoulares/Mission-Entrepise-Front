import { Component, EventEmitter, Input, Output } from '@angular/core';
import { gridImage } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-grid-tab',
  templateUrl: './grid-tab.component.html',
  styleUrls: ['./grid-tab.component.scss'],
})
export class GridTabComponent {

  @Input() gridImagesData: gridImage[];
  @Output() imagesData = new EventEmitter<gridImage[]>();

  public images: gridImage[];
  public activeTab: string = 'all';

  ngOnChanges(){
    this.images = this.gridImagesData?.filter((data) => {
      return data.fileType = 'image'
    })
  }

  getTab(value: string) {
    this.activeTab = value;
   this.images = this.gridImagesData.filter((data) => {
      return data.type == value;
    })
    if(value == 'all'){
      this.images = this.gridImagesData
    }
    this.imagesData.emit(this.images);
  }
}
