import { Component, Input } from '@angular/core';
import { agents } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-agents-three',
  templateUrl: './agents-three.component.html',
  styleUrls: ['./agents-three.component.scss'],
})
export class AgentsThreeComponent {
  
  @Input() agentsData: agents[] = [];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items : 1
      },
      668: {
        items: 2
      },
      924: {
        items: 3
      },
      1240: {
        items: 4
      }
    }
  };
}
