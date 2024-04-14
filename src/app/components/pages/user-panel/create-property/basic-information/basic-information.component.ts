import { Component } from '@angular/core';
import {
  agency,
  baths,
  beds,
  category,
  propertyStatus,
  propertyType,
  rooms,
  location,
} from '../../../../../shared/data/advance-filter';


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent {

  public propertyStatus = propertyStatus;
  public propertyType = propertyType;
  public location = location;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;
  public agency = agency;
  public category = category;

}
