import { Component, EventEmitter, Output } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-property-gallery',
  templateUrl: './property-gallery.component.html',
  styleUrls: ['./property-gallery.component.scss'],
})
export class PropertyGalleryComponent {

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 3;
  public files: File[] = [];
  public validation: boolean = false;


  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  next() {
    if(this.files.length >= 1){
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }else{
      this.validation = true;
    }
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
