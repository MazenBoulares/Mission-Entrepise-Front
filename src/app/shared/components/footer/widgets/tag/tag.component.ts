import { Component } from '@angular/core';
import { tagFooterData } from '../../../../data/footer';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {

  public tagFooterData = tagFooterData;
  public isTagData: boolean = false;

  openTag() {
    this.isTagData = !this.isTagData;
  }
}
