import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { GalleryModule } from 'ng-gallery';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSliderModule } from 'ngx-slider-v2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LightboxModule } from 'ng-gallery/lightbox';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import 'mousetrap';

import { AgentsOneComponent } from './components/common/agents/agents-one/agents-one.component';
import { AgentsTwoComponent } from './components/common/agents/agents-two/agents-two.component';
import { AgentsComponent } from './components/common/agents/agents.component';
import { BannerOneComponent } from './components/common/banner/banner-one/banner-one.component';
import { BannerThreeComponent } from './components/common/banner/banner-three/banner-three.component';
import { BannerTwoComponent } from './components/common/banner/banner-two/banner-two.component';
import { BannerComponent } from './components/common/banner/banner.component';
import { BrandOneComponent } from './components/common/brand/brand-one/brand-one.component';
import { BrandTwoComponent } from './components/common/brand/brand-two/brand-two.component';
import { BrandComponent } from './components/common/brand/brand.component';
import { FeaturedPropertyOneComponent } from './components/common/featured-property/featured-property-one/featured-property-one.component';
import { FeaturedPropertyThreeComponent } from './components/common/featured-property/featured-property-three/featured-property-three.component';
import { FeaturedPropertyTwoComponent } from './components/common/featured-property/featured-property-two/featured-property-two.component';
import { FeaturedPropertyComponent } from './components/common/featured-property/featured-property.component';
import { HappyClientOneComponent } from './components/common/happy-clients/happy-client-one/happy-client-one.component';
import { HappyClientTwoComponent } from './components/common/happy-clients/happy-client-two/happy-client-two.component';
import { HappyClientsComponent } from './components/common/happy-clients/happy-clients.component';
import { FilterBoxComponent } from './components/common/home-section-slider/filter-box/filter-box.component';
import { HomeSectionSliderComponent } from './components/common/home-section-slider/home-section-slider.component';
import { LookingForIconsComponent } from './components/common/home-section-slider/looking-for-icons/looking-for-icons.component';
import { SliderOneComponent } from './components/common/home-section-slider/slider-one/slider-one.component';
import { SliderThreeComponent } from './components/common/home-section-slider/slider-three/slider-three.component';
import { SliderTwoComponent } from './components/common/home-section-slider/slider-two/slider-two.component';
import { LatestBlogOneComponent } from './components/common/latest-blog/latest-blog-one/latest-blog-one.component';
import { LatestBlogTwoComponent } from './components/common/latest-blog/latest-blog-two/latest-blog-two.component';
import { LatestBlogComponent } from './components/common/latest-blog/latest-blog.component';
import { NewOfferComponent } from './components/common/new-offer/new-offer.component';
import { PeopleSayComponent } from './components/common/people-say/people-say.component';
import { PricingPlanOneComponent } from './components/common/pricing-plan/pricing-plan-one/pricing-plan-one.component';
import { PricingPlanComponent } from './components/common/pricing-plan/pricing-plan.component';
import { PropertyBoxFourComponent } from './components/common/property-box/property-box-four/property-box-four.component';
import { PropertyBoxFiveComponent } from './components/common/property-box/property-box-five/property-box-five.component';
import { PropertyBoxOneComponent } from './components/common/property-box/property-box-one/property-box-one.component';
import { PropertyBoxThreeComponent } from './components/common/property-box/property-box-three/property-box-three.component';
import { PropertyBoxTwoComponent } from './components/common/property-box/property-box-two/property-box-two.component';
import { PropertyBoxComponent } from './components/common/property-box/property-box.component';
import { PropertyCityOneComponent } from './components/common/property-in-cities/property-city-one/property-city-one.component';
import { PropertyCityTwoComponent } from './components/common/property-in-cities/property-city-two/property-city-two.component';
import { PropertyInCitiesComponent } from './components/common/property-in-cities/property-in-cities.component';
import { PropertyOfDayComponent } from './components/common/property-of-day/property-of-day.component';
import { ProvidedServiceOneComponent } from './components/common/provided-services/provided-service-one/provided-service-one.component';
import { ProvidedServiceTwoComponent } from './components/common/provided-services/provided-service-two/provided-service-two.component';
import { ProvidedServicesComponent } from './components/common/provided-services/provided-services.component';
import { FooterOneComponent } from './components/footer/footer-one/footer-one.component';
import { FooterThreeComponent } from './components/footer/footer-three/footer-three.component';
import { FooterTwoComponent } from './components/footer/footer-two/footer-two.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/footer/widgets/about/about.component';
import { BuyComponent } from './components/footer/widgets/buy/buy.component';
import { ContactOneComponent } from './components/footer/widgets/contact-one/contact-one.component';
import { ContactTwoComponent } from './components/footer/widgets/contact-two/contact-two.component';
import { CopyRightOneComponent } from './components/footer/widgets/copy-right-one/copy-right-one.component';
import { CopyRightTwoComponent } from './components/footer/widgets/copy-right-two/copy-right-two.component';
import { FeaturesComponent } from './components/footer/widgets/features/features.component';
import { FooterMenuComponent } from './components/footer/widgets/footer-menu/footer-menu.component';
import { LatestBlogVerticalComponent } from './components/footer/widgets/latest-blog-vertical/latest-blog-vertical.component';
import { MapComponent } from './components/footer/widgets/map/map.component';
import { RelandEstateComponent } from './components/footer/widgets/reland-estate/reland-estate.component';
import { SellComponent } from './components/footer/widgets/sell/sell.component';
import { SocialMediaComponent } from './components/footer/widgets/social-media/social-media.component';
import { SocialComponent } from './components/footer/widgets/social/social.component';
import { SubscribeComponent } from './components/footer/widgets/subscribe/subscribe.component';
import { TagComponent } from './components/footer/widgets/tag/tag.component';
import { UsefulLinksComponent } from './components/footer/widgets/useful-links/useful-links.component';
import { HeaderOneComponent } from './components/header/header-one/header-one.component';
import { HeaderThreeComponent } from './components/header/header-three/header-three.component';
import { HeaderTwoComponent } from './components/header/header-two/header-two.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/header/widgets/contact/contact.component';
import { CurrencyComponent } from './components/header/widgets/currency/currency.component';
import { HomeComponent } from './components/header/widgets/home/home.component';
import { LanguageComponent } from './components/header/widgets/language/language.component';
import { ProfileTwoComponent } from './components/header/widgets/profile-two/profile-two.component';
import { ProfileComponent } from './components/header/widgets/profile/profile.component';
import { SearchTwoComponent } from './components/header/widgets/search-two/search-two.component';
import { SearchComponent } from './components/header/widgets/search/search.component';
import { WishlistComponent } from './components/header/widgets/wishlist/wishlist.component';
import { MenuComponent } from './components/menu/menu.component';
import { FeatherIconsComponent } from './components/ui/feather-icons/feather-icons.component';
import { TitleComponent } from './components/ui/title/title.component';
import { AdvanceFilterBoxHorizontialComponent } from './components/common/advance-filter-box-horizontial/advance-filter-box-horizontial.component';
import { AdvanceFilterBoxComponent } from './components/common/advance-filter-box/advance-filter-box.component';
import { CategoryComponent } from './components/common/advance-filter-box/widgets/category/category.component';
import { ContactInfoComponent } from './components/common/advance-filter-box/widgets/contact-info/contact-info.component';
import { RecentlyAddedComponent } from './components/common/advance-filter-box/widgets/recently-added/recently-added.component';
import { AdvanceFilterComponent } from './components/common/advance-filter/advance-filter.component';
import { AdvanceFilterContactComponent } from './components/common/advance-filter/widgets/advance-filter-contact/advance-filter-contact.component';
import { AdvanceFilterMortgageComponent } from './components/common/advance-filter/widgets/advance-filter-mortgage/advance-filter-mortgage.component';
import { AdvanceFilterRequestExplorationComponent } from './components/common/advance-filter/widgets/advance-filter-request-exploration/advance-filter-request-exploration.component';
import { AgentsThreeComponent } from './components/common/agents/agents-three/agents-three.component';
import { BannerFourComponent } from './components/common/banner/banner-four/banner-four.component';
import { BrandThreeComponent } from './components/common/brand/brand-three/brand-three.component';
import { HappyClientThreeComponent } from './components/common/happy-clients/happy-client-three/happy-client-three.component';
import { AnimationDotsComponent } from './components/common/home-section-slider/animation-dots/animation-dots.component';
import { FilterBoxThreeComponent } from './components/common/home-section-slider/filter-box-three/filter-box-three.component';
import { FilterBoxTwoComponent } from './components/common/home-section-slider/filter-box-two/filter-box-two.component';
import { SliderFourComponent } from './components/common/home-section-slider/slider-four/slider-four.component';
import { LoaderOneComponent } from './components/common/loader/loader-one/loader-one.component';
import { LoaderThreeComponent } from './components/common/loader/loader-three/loader-three.component';
import { LoaderTwoComponent } from './components/common/loader/loader-two/loader-two.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import { AddNewCardModalComponent } from './components/common/modal/add-new-card-modal/add-new-card-modal.component';
import { EditCardModalComponent } from './components/common/modal/edit-card-modal/edit-card-modal.component';
import { EditUserDetailsModalComponent } from './components/common/modal/edit-user-details-modal/edit-user-details-modal.component';
import { EditUserEmailModalComponent } from './components/common/modal/edit-user-email-modal/edit-user-email-modal.component';
import { EditUserPasswordModalComponent } from './components/common/modal/edit-user-password-modal/edit-user-password-modal.component';
import { VideoModalComponent } from './components/common/modal/video-modal/video-modal.component';
import { CommonPropertyBoxComponent } from './components/common/property-box/property-box-four/common-property-box/common-property-box.component';
import { ImageSliderComponent } from './components/common/property-box/property-box-two/image-slider/image-slider.component';
import { ProvidedServiceThreeComponent } from './components/common/provided-services/provided-service-three/provided-service-three.component';
import { CommonFilterPropertyBoxComponent } from './components/common/widgets/common-filter-property-box/common-filter-property-box.component';
import { GridPanelComponent } from './components/common/widgets/grid-panel/grid-panel.component';
import { MapModalComponent } from './components/common/widgets/modal/map-modal/map-modal.component';
import { PaginationComponent } from './components/common/widgets/pagination/pagination.component';
import { HeaderFourComponent } from './components/header/header-four/header-four.component';
import { BreadcrumbComponent } from './components/ui/breadcrumb/breadcrumb.component';
import { ContentComponent } from './components/ui/content/content.component';
import { CustomizerComponent } from './components/ui/customizer/customizer.component';
import { TapToTopComponent } from './components/ui/tap-to-top/tap-to-top.component';
import { CommonFilterListingComponent } from './components/common/widgets/common-filter-listing/common-filter-listing.component';
import { CurrencySymbolPipe } from './pipe/currency-symbol.pipe';
import { CommonPropertyFilterListingComponent } from './components/common/widgets/common-property-filter-listing/common-property-filter-listing.component';
import { CommonLeafletMapComponent } from './components/common/widgets/common-leaflet-map/common-leaflet-map.component';
import { CommonLeafletMapRangeComponent } from './components/common/widgets/common-leaflet-map-range/common-leaflet-map-range.component';
import { ClickOutsideDirective } from './directive/outside.directive';
import { GoogleMapsModule } from '@angular/google-maps';
import { LogInModalComponent } from './components/common/modal/log-in-modal/log-in-modal.component';
import { ModalLoginFormComponent } from './components/common/modal/widgets/modal-login-form/modal-login-form.component';
import { ModalRegisterFormComponent } from './components/common/modal/widgets/modal-register-form/modal-register-form.component';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { LatestBlogHorizontalComponent } from './components/footer/widgets/latest-blog-horizontal/latest-blog-horizontal.component';
import { CommonFilterPropertyBoxRangeComponent } from './components/common/widgets/common-filter-property-box-range/common-filter-property-box-range.component';


@NgModule({
  declarations: [
    HeaderOneComponent,
    HeaderTwoComponent,
    MenuComponent,
    HeaderComponent,
    FeatherIconsComponent,
    HeaderThreeComponent,
    FooterComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    ContactOneComponent,
    AboutComponent,
    TagComponent,
    MapComponent,
    LatestBlogVerticalComponent,
    ContactTwoComponent,
    UsefulLinksComponent,
    FeaturesComponent,
    SocialMediaComponent,
    BuyComponent,
    SellComponent,
    RelandEstateComponent,
    LatestBlogHorizontalComponent,
    SubscribeComponent,
    SocialComponent,
    CopyRightOneComponent,
    FooterMenuComponent,
    CopyRightTwoComponent,
    LanguageComponent,
    WishlistComponent,
    CurrencyComponent,
    ProfileComponent,
    SearchComponent,
    SearchTwoComponent,
    ContactComponent,
    HomeComponent,
    ProfileTwoComponent,
    SliderOneComponent,
    LookingForIconsComponent,
    FilterBoxComponent,
    PropertyBoxOneComponent,
    PropertyBoxTwoComponent,
    PropertyBoxThreeComponent,
    PropertyBoxFourComponent,
    PropertyBoxFiveComponent,
    FeaturedPropertyOneComponent,
    FeaturedPropertyTwoComponent,
    NewOfferComponent,
    PropertyCityOneComponent,
    PropertyCityTwoComponent,
    BannerOneComponent,
    BannerTwoComponent,
    AgentsOneComponent,
    AgentsTwoComponent,
    HappyClientOneComponent,
    HappyClientTwoComponent,
    BrandOneComponent,
    BrandTwoComponent,
    SliderTwoComponent,
    ProvidedServiceOneComponent,
    ProvidedServiceTwoComponent,
    TitleComponent,
    PricingPlanOneComponent,
    PropertyBoxComponent,
    FeaturedPropertyComponent,
    PropertyInCitiesComponent,
    BannerComponent,
    AgentsComponent,
    HappyClientsComponent,
    BrandComponent,
    HomeSectionSliderComponent,
    ProvidedServicesComponent,
    PricingPlanComponent,
    LatestBlogComponent,
    LatestBlogOneComponent,
    LatestBlogTwoComponent,
    PropertyOfDayComponent,
    BannerThreeComponent,
    PeopleSayComponent,
    SliderThreeComponent,
    FeaturedPropertyThreeComponent,
    ProvidedServiceThreeComponent,
    CommonPropertyBoxComponent,
    AgentsThreeComponent,
    BannerFourComponent,
    HappyClientThreeComponent,
    BrandThreeComponent,
    FilterBoxTwoComponent,
    AnimationDotsComponent,
    FilterBoxThreeComponent,
    BreadcrumbComponent,
    AdvanceFilterBoxComponent,
    ContactInfoComponent,
    RecentlyAddedComponent,
    AdvanceFilterBoxHorizontialComponent,
    HeaderFourComponent,
    CommonFilterPropertyBoxComponent,
    CommonFilterPropertyBoxRangeComponent,
    GridPanelComponent,
    MapModalComponent,
    PaginationComponent,
    ImageSliderComponent,
    SliderFourComponent,
    VideoModalComponent,
    AdvanceFilterComponent,
    AdvanceFilterContactComponent,
    AdvanceFilterRequestExplorationComponent,
    AdvanceFilterMortgageComponent,
    CategoryComponent,
    EditUserDetailsModalComponent,
    EditUserEmailModalComponent,
    EditUserPasswordModalComponent,
    AddNewCardModalComponent,
    EditCardModalComponent,
    TapToTopComponent,
    LoaderComponent,
    LoaderOneComponent,
    LoaderTwoComponent,
    LoaderThreeComponent,
    CustomizerComponent,
    ContentComponent,
    CommonFilterListingComponent,
    CurrencySymbolPipe,
    CommonPropertyFilterListingComponent,
    CommonLeafletMapComponent,
    ClickOutsideDirective,
    LogInModalComponent,
    ModalLoginFormComponent,
    ModalRegisterFormComponent,
    CommonLeafletMapRangeComponent,
    LayoutComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    NgbModule,
    AngularSvgIconModule.forRoot(),
    NgxSliderModule,
    LightboxModule,
    GalleryModule,
    LeafletModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbDropdownModule,
    GoogleMapsModule
  ],
  providers: [CurrencyPipe],
  exports: [
    NgbModule,
    FeatherIconsComponent,
    HeaderComponent,
    FooterComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    TitleComponent,
    HomeSectionSliderComponent,
    SliderOneComponent,
    LookingForIconsComponent,
    FilterBoxComponent,
    PropertyBoxComponent,
    FeaturedPropertyComponent,
    CommonFilterPropertyBoxRangeComponent,
    NewOfferComponent,
    PropertyInCitiesComponent,
    BannerComponent,
    AgentsComponent,
    HappyClientsComponent,
    BrandComponent,
    ProvidedServicesComponent,
    PricingPlanComponent,
    LatestBlogComponent,
    PropertyOfDayComponent,
    PeopleSayComponent,
    FilterBoxTwoComponent,
    FilterBoxThreeComponent,
    BreadcrumbComponent,
    AdvanceFilterBoxComponent,
    AdvanceFilterBoxHorizontialComponent,
    HeaderFourComponent,
    CommonFilterPropertyBoxComponent,
    GridPanelComponent,
    MapModalComponent,
    PaginationComponent,
    AdvanceFilterComponent,
    CategoryComponent,
    RecentlyAddedComponent,
    TapToTopComponent,
    LoaderComponent,
    CustomizerComponent,
    ContentComponent,
    CommonFilterListingComponent,
    TranslateModule,
    CurrencySymbolPipe,
    CommonPropertyFilterListingComponent,
    CommonLeafletMapComponent,
    CommonLeafletMapRangeComponent,
    AnimationDotsComponent,
    PropertyBoxFiveComponent  
  ],
})
export class SharedModule {}
