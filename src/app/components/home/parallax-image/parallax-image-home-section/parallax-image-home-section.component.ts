import { Component } from '@angular/core';

@Component({
  selector: 'app-parallax-image-home-section',
  templateUrl: './parallax-image-home-section.component.html',
  styleUrls: ['./parallax-image-home-section.component.scss']
})
export class ParallaxImageHomeSectionComponent {

   public open: boolean = false;
   public selectedItem: string = 'Any Property type'

  openMenu(){
    this.open =! this.open;
  }

  changedItem(item: string){
    this.selectedItem = item
  }

}
