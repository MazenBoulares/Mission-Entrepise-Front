import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { Feature } from 'src/app/classes/features';
import { FeatureService } from 'src/app/services/feature.service';
import { FormDataService } from 'src/app/services/form-data.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-gallery',
  templateUrl: './property-gallery.component.html',
  styleUrls: ['./property-gallery.component.scss'],
})
export class PropertyGalleryComponent {

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 3;
  public files: File[] = [];
  imageUrls: string[] = [];
  generalDetails: FormGroup;
  addressDetails: FormGroup;
  public validation: boolean = false;
  public additionalFeatures: Feature[] = [];

  constructor(private propertyService: PropertyService, private featureService: FeatureService, private imageUploadService: ImageUploadService, private formDataService: FormDataService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.fetchFeatureData()
  }


  // get all features from data base
  fetchFeatureData() {
    // Example usage of featureService to fetch data
    this.featureService.getAllFeatures().subscribe(
      (data) => {
        console.log(data);
        this.additionalFeatures = data;
      }
    );
  }
  isLoading: boolean = false;

  // add New Property 
  async addNewProperty() {
    try {
      this.isLoading = true; // Start loading
      this.generalDetails = this.formDataService.getFormGroup('generalDetails');
      this.addressDetails = this.formDataService.getFormGroup('addressDetails');
      const propertyData = {
        address: this.addressDetails.value,
        ...this.generalDetails.value,
      };

      await this.onUpload(); // Wait for file uploads to complete

      const propertyImagesUrl = this.imageUrls.map(url => ({ imageUrl: url }));
      propertyData.propertyImagesUrl = propertyImagesUrl;

      const data = await this.propertyService.addNewProperty(propertyData).toPromise();
      console.log('Property added successfully:', data);
    } catch (error) {
      console.error('Error adding property:', error);
      throw error; // Propagate the error to the caller (next() method)
    } finally {
      this.isLoading = false; // Stop loading
    }
  }
  onUpload(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.files.length > 0) {
        let currentIndex = 0;
        const uploadNextFile = () => {
          if (currentIndex < this.files.length) {
            const file = this.files[currentIndex];
            this.imageUploadService.uploadImage(file).subscribe(
              (response) => {
                if (response && response.data && response.data.url) {
                  this.imageUrls.push(response.data.url);
                  console.log('Uploaded Image URL:', response.data.url);

                  currentIndex++;
                  uploadNextFile();
                }
              },
              error => {
                console.error('Upload failed for file:', file.name);
                reject(error);
              }
            );
          } else {
            resolve(); // All files are uploaded
          }
        };
        uploadNextFile();
      } else {
        console.error('No files selected.');
        reject('No files selected.');
      }
    });
  }


  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  async  next() {
    if (this.files.length >= 1 && this.files.length < 4) {
      try {
        await this.addNewProperty(); // Wait for addNewProperty() to complete
        this.closeModalFunction(); // Close modal after property is added
        const number = this.activeStep + 1;
        this.activeSteps.emit(number); // Proceed to the next step
      } catch (error) {
        console.error('Error adding property:', error);
        alert('Error adding property. Please try again.');
      }
    } else {
      this.validation = true;
    }
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
    console.log(this.files)
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  // Modal functionaliy
  //function to open modal
  openModalFunction(content: any) {
    if (this.files.length >= 1 && this.files.length < 4){
      this.modalService.open(content);
    }
  }
  //function to close modal
  closeModalFunction() {
    this.modalService.dismissAll();
  }
}
