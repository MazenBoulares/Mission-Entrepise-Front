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
  addNewProperty() {
    this.isLoading = true; // Start loading
    this.generalDetails = this.formDataService.getFormGroup('generalDetails');
    this.addressDetails = this.formDataService.getFormGroup('addressDetails');
    const propertyData = {
      address:this.addressDetails.value,
      ...this.generalDetails.value,
    };
    this.onUpload().then(() => {
      // Transform image URLs into the required format
      const propertyImagesUrl = this.imageUrls.map(url => ({ imageUrl: url }));
      // Add the image URLs to the property data
      propertyData.propertyImagesUrl = propertyImagesUrl;
      // this.isLoading = false; // Stop loading after upload
      console.log(propertyData)
      // Optionally, send the combined data and images URL to the backend
      this.propertyService.addNewProperty(propertyData).subscribe({
        next: (data) => { console.log("property added succufuly") ; console.log(data) },
        error: (err) => { console.log(err) },
    });
    }).catch(error => {
      // this.isLoading = false; // Stop loading on error
      console.error('Error during file upload:', error);
    });

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

  next() {
    if (this.files.length >= 1 && this.files.length < 4) {
      const number = this.activeStep + 1;
      this.closeModalFunction()
      this.addNewProperty()
      this.activeSteps.emit(number);
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
    this.modalService.open(content);
  }
  //function to close modal
  closeModalFunction() {
    this.modalService.dismissAll();
  }
}
