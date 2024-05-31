import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Contact} from "../../../../../../classes/contact";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../../../../../services/property.service";


@Component({
  selector: 'app-advance-filter-request-exploration',
  templateUrl: './advance-filter-request-exploration.component.html',
  styleUrls: ['./advance-filter-request-exploration.component.scss']
})
export class AdvanceFilterRequestExplorationComponent implements OnInit {
  contactForm: FormGroup;
  contact: Contact;
  constructor(private router: Router, private route: ActivatedRoute, public propertyService: PropertyService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'phoneNumber': new FormControl(null),
      'message': new FormControl(null)
    });
  }
  onSubmit() {
    this.contact = this.contactForm.value;

    console.log(this.contact);
    this.propertyService.RequestExploration(this.contact).subscribe(
        response => {
          console.log('Email sent successfully!', response);
        },
        error => {
          console.error('There was an error!', error);
        }
    );
  }

}
