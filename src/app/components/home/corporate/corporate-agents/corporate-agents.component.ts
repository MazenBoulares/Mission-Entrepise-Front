import { Component, Input } from '@angular/core';
import { agents } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-corporate-agents',
  templateUrl: './corporate-agents.component.html',
  styleUrls: ['./corporate-agents.component.scss']
})
export class CorporateAgentsComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public desc = "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public title = 'corporate';
  public agentsData: agents[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(){
    this.propertyService.agentsData().subscribe(response => {
      this.agentsData = response.agents.filter(item => item.type == this.title)
  });
}
}
