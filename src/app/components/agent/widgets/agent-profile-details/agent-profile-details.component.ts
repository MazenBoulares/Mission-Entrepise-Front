import { Component, Input } from '@angular/core';
import { agency } from '../../../../shared/interface/property';

@Component({
  selector: 'app-agent-profile-details',
  templateUrl: './agent-profile-details.component.html',
  styleUrls: ['./agent-profile-details.component.scss'],
})
export class AgentProfileDetailsComponent {

  @Input() agentsDetails: agency;

}
