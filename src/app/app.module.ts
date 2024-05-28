import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  wishlistState } from './shared/store/states/wishlist.state';
import { categoryState } from './shared/store/states/category.state';
import { compareState } from './shared/store/states/compare.state';
import { propertyState } from './shared/store/states/property-detail.state';
import { imageState } from './shared/store/states/property-images.state';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  // Import FormsModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CreateRoommatePreferencesModalComponent } from './shared/components/common/modal/CreateRoommatePreferencesModalComponent/CreateRoommatePreferencesModalComponent';
import { RoommatePreferencesService } from './services/RoommatePreferencesService.service';  // Update path as necessary
import { EditRoommatePreferencesModalComponent } from './shared/components/common/modal/EditRoommatePreferencesModalComponent/EditRoommatePreferencesModalComponent';

export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [AppComponent,
    CreateRoommatePreferencesModalComponent,
    EditRoommatePreferencesModalComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CarouselModule,
    BrowserModule,
    FormsModule,  // Add FormsModule here
    NgbModule,

    // Ngxs
    NgxsModule.forRoot([wishlistState, categoryState, compareState, imageState, propertyState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['wishlist', 'compare'],
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    RoommatePreferencesService
  ],
  exports: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
