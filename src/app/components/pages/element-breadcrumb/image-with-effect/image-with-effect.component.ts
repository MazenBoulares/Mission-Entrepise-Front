import { Component } from '@angular/core';

@Component({
  selector: 'app-image-with-effect',
  templateUrl: './image-with-effect.component.html',
  styleUrls: ['./image-with-effect.component.scss'],
})
export class ImageWithEffectComponent {

  public bgImage = 'assets/images/parallax/3.jpg';
  public title = 'image with effect';
  public parent = 'Home';
  public child = 'image with effect'
  
}
