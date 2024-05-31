import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-right-one',
  templateUrl: './copy-right-one.component.html',
  styleUrls: ['./copy-right-one.component.scss']
})
export class CopyRightOneComponent {

  @Input() heartIcon?: boolean = false;

 }
