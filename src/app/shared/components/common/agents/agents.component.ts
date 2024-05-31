import { Component, Input } from '@angular/core';
import { agents } from '../../../../shared/interface/property';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent {

  @Input() agentsData: agents[] = [];
  @Input() type: string = ''
  @Input() tagClass: string = '';

}
