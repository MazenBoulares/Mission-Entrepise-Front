import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormDataService {
    private formGroups: { [key: string]: FormGroup } = {};
    private idProperty : number;
    constructor() { }

    // Method to register a form group with a unique key
    registerFormGroup(key: string, formGroup: FormGroup): void {
        this.formGroups[key] = formGroup;
    }
    registerIdProperty (id :number){
        this.idProperty = id;
    }
    // Method to get a form group by its key
    getFormGroup(key: string): FormGroup {
        return this.formGroups[key];
    }
    getIdProperty(id: string):number{
        return this.idProperty;
    }
    // Method to remove a form group by its key
    removeFormGroup(key: string): void {
        delete this.formGroups[key];
    }
}