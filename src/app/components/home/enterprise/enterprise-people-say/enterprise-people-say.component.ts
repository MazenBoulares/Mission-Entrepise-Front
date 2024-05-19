import { Component } from '@angular/core';
import { peopleSay } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-enterprise-people-say',
  templateUrl: './enterprise-people-say.component.html',
  styleUrls: ['./enterprise-people-say.component.scss'],
})
export class EnterprisePeopleSayComponent {

  public desc = 'Cum doctus civibus efficiantur in imperdiet deterruisset.';
  public title: string = 'enterprise';

  public peopleSayData: peopleSay[];

  constructor(private propertyService: PropertyService) {}
  ngOnInit() {
    this.propertyService.peopleSayData().subscribe((response) => {
      this.peopleSayData = response.peopleSay.filter(
        (item) => item.type == this.title
      );
    });
  }
}
