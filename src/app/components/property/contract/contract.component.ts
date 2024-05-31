import {AfterViewInit, Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../../../shared/services/property.service";
import {SharedModule} from "../../../shared/shared.module";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements AfterViewInit {
  @Input() propertyDetails: any
  landlord: any;
  currentDate: string;
  buyerFirstName: string;
  contactForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private router: Router, private route: ActivatedRoute, public propertyService: PropertyService) {
    this.currentDate = this.getCurrentDate();
  }

  ngAfterViewInit(): void {
    const sellBtn = document.getElementById('sell-contract-btn');
    const rentBtn = document.getElementById('rent-contract-btn');
    const sellContract = document.getElementById('sell-contract');
    const rentContract = document.getElementById('rent-contract');

    if (sellBtn && rentBtn && sellContract && rentContract) {
      sellBtn.addEventListener('click', () => {
        sellBtn.classList.add('active');
        rentBtn.classList.remove('active');
        sellContract.classList.add('active');
        rentContract.classList.remove('active');
      });

      rentBtn.addEventListener('click', () => {
        rentBtn.classList.add('active');
        sellBtn.classList.remove('active');
        rentContract.classList.add('active');
        sellContract.classList.remove('active');
      });
    }
  }


  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     console.log('queryParams', params['id']);
  //     const id = params['id'];
  //     console.log(id);
  //     this.propertyService.getPropertyById(id).subscribe(property => {
  //       this.propertyDetails = property;
  //     });
  //
  //     this.propertyService.getLandlordByPropertyId(id).subscribe(
  //         data => {
  //           this.landlord = data;
  //           console.log("gooooooog", id)
  //         },
  //         error => {
  //           console.error('Error:', error);
  //         }
  //     );
  //   });
  // }

  getCurrentDate(): string {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US');
  }

  printActiveContract(): void {
    const activeContract = document.querySelector('.contract.active');
    if (activeContract) {
      const printContents = activeContract.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reload to reset the view after printing
    }
  }
  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'phoneNumber': new FormControl(null),
      'message': new FormControl(null)
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
    }
  }

  sendForSignature() {
    if (this.selectedFile && this.contactForm.valid) {
      const formValues = this.contactForm.value;
      this.propertyService.sendDocumentForSignature(this.selectedFile, formValues.name, formValues.email)
          .subscribe(response => {
            console.log('Document sent for signing:', response);
          }, error => {
            console.error('Error sending document for signing:', error);
          });
    } else {
      console.error('Form is invalid or file is not selected');
    }
  }
  onFileSelected($event: Event) {

  }


}
