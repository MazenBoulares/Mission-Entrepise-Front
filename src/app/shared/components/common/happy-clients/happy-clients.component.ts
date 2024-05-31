import { Component, Input } from '@angular/core';
import { happyClients } from '../../../../shared/interface/property';

@Component({
  selector: 'app-happy-clients',
  templateUrl: './happy-clients.component.html',
  styleUrls: ['./happy-clients.component.scss']
})
export class HappyClientsComponent {

  @Input() happyClientsData: happyClients[] = [];
  @Input() type: string = '';
  @Input() tagClass: string = ''

}
