import { Component, Input } from '@angular/core';
import { agents } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-agents-two',
  templateUrl: './agents-two.component.html',
  styleUrls: ['./agents-two.component.scss'],
})
export class AgentsTwoComponent {

  @Input() agentsData: agents[] = [];
  @Input() tagClass: string;

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      1240: {
        items: 3,
      },
    },
  };
}
