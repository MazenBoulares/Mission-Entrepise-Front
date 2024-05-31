import {Component, Input, OnInit} from '@angular/core';
import { propertyDetails } from '../../../../shared/interface/property';
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../../../../shared/services/property.service";

@Component({
  selector: 'app-propety-details',
  templateUrl: './propety-details.component.html',
  styleUrls: ['./propety-details.component.scss'],
})
export class PropetyDetailsComponent implements OnInit{

  @Input() propertyDetailsData: propertyDetails[];
  @Input() propertyDetails: any
  constructor(private router: Router, private route: ActivatedRoute, public propertyService: PropertyService){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('queryParams', params['id']);
      const id = params['id'];
      console.log(id);
      this.propertyService.getPropertyById(id).subscribe(property => {
        this.propertyDetails = property;
      });
    });
  }
}
