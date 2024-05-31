import {Component, Input, OnInit} from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss'],
})
export class HomeDetailsComponent implements OnInit{

  @Input() propertyDetails: any
  constructor(private router: Router, private route: ActivatedRoute, public propertyService: PropertyService){}

  print(){
    window.print()
  }

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