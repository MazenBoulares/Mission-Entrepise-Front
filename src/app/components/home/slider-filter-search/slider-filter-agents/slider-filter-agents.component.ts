import { Component, Input } from '@angular/core';
import { agents } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-slider-filter-agents',
  templateUrl: './slider-filter-agents.component.html',
  styleUrls: ['./slider-filter-agents.component.scss']
})
export class SliderFilterAgentsComponent {

  @Input() tagClass: string = '';
  @Input() title: string;
  @Input() sectionClass: string;

  public agentsData: agents[] = [];

  constructor(private propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.agentsData().subscribe(response => {
      this.agentsData = response.agents.filter(item => item.type.includes(this.title))
  });
}

}
