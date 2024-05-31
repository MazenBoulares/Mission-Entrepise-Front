import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../../../../../services/property.service";

@Component({
  selector: 'app-advance-filter-contact',
  templateUrl: './advance-filter-contact.component.html',
  styleUrls: ['./advance-filter-contact.component.scss']
})
export class AdvanceFilterContactComponent implements OnInit {

  landlord: any;

    constructor(private router: Router, private route: ActivatedRoute, public propertyService: PropertyService){}

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
          console.log('queryParams', params['id']);
          const id = params['id'];
          console.log(id);
          this.propertyService.getLandlordByPropertyId(id).subscribe(
              data => {
                  this.landlord = data;
                  console.log("gooooooog", id)
              },
              error => {
                  console.error('Error:', error);
              }
          );
      });
  }
}