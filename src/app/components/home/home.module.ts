import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ClassicAgentsComponent } from './classic/classic-agents/classic-agents.component';
import { ClassicBannerComponent } from './classic/classic-banner/classic-banner.component';
import { ClassicBrandComponent } from './classic/classic-brand/classic-brand.component';
import { ClassicFeaturedPropertyComponent } from './classic/classic-featured-property/classic-featured-property.component';
import { ClassicHappyClientComponent } from './classic/classic-happy-client/classic-happy-client.component';
import { ClassicHomeSectionComponent } from './classic/classic-home-section/classic-home-section.component';
import { ClassicLatestPropertyComponent } from './classic/classic-latest-property/classic-latest-property.component';
import { ClassicPropertyListingComponent } from './classic/classic-property-listing/classic-property-listing.component';
import { ClassicPropertyServiceComponent } from './classic/classic-property-service/classic-property-service.component';
import { ClassicVideoComponent } from './classic/classic-video/classic-video.component';
import { ClassicComponent } from './classic/classic.component';
import { CorporateAgentsComponent } from './corporate/corporate-agents/corporate-agents.component';
import { CorporateBannerComponent } from './corporate/corporate-banner/corporate-banner.component';
import { CorporateClientsComponent } from './corporate/corporate-clients/corporate-clients.component';
import { CorporateFeaturedPropertyComponent } from './corporate/corporate-featured-property/corporate-featured-property.component';
import { CorporateHomeSliderComponent } from './corporate/corporate-home-slider/corporate-home-slider.component';
import { CorporateLatestBlogComponent } from './corporate/corporate-latest-blog/corporate-latest-blog.component';
import { CorporatePricingPlanComponent } from './corporate/corporate-pricing-plan/corporate-pricing-plan.component';
import { CorporatePropertyListingComponent } from './corporate/corporate-property-listing/corporate-property-listing.component';
import { CorporateProvidedServicesComponent } from './corporate/corporate-provided-services/corporate-provided-services.component';
import { CorporateComponent } from './corporate/corporate.component';
import { EnterpriseBannerComponent } from './enterprise/enterprise-banner/enterprise-banner.component';
import { EnterpriseBrandComponent } from './enterprise/enterprise-brand/enterprise-brand.component';
import { EnterpriseFeaturedCityComponent } from './enterprise/enterprise-featured-city/enterprise-featured-city.component';
import { EnterpriseHomeSectionComponent } from './enterprise/enterprise-home-section/enterprise-home-section.component';
import { EnterpriseLatestBlogComponent } from './enterprise/enterprise-latest-blog/enterprise-latest-blog.component';
import { EnterpriseLatestPropertyComponent } from './enterprise/enterprise-latest-property/enterprise-latest-property.component';
import { EnterpriseLookingForComponent } from './enterprise/enterprise-looking-for/enterprise-looking-for.component';
import { EnterprisePeopleSayComponent } from './enterprise/enterprise-people-say/enterprise-people-say.component';
import { EnterprisePropertyOfDayComponent } from './enterprise/enterprise-property-of-day/enterprise-property-of-day.component';
import { EnterprisePropertyServiceComponent } from './enterprise/enterprise-property-service/enterprise-property-service.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ImageContentHomeSectionComponent } from './image-content/image-content-home-section/image-content-home-section.component';
import { ImageContentComponent } from './image-content/image-content.component';
import { SliderFilterAgentsComponent } from './slider-filter-search/slider-filter-agents/slider-filter-agents.component';
import { SliderFilterBannerComponent } from './slider-filter-search/slider-filter-banner/slider-filter-banner.component';
import { SliderFilterBrandComponent } from './slider-filter-search/slider-filter-brand/slider-filter-brand.component';
import { SliderFilterFeaturedPropertyComponent } from './slider-filter-search/slider-filter-featured-property/slider-filter-featured-property.component';
import { SliderFilterHappyClientComponent } from './slider-filter-search/slider-filter-happy-client/slider-filter-happy-client.component';
import { SliderFilterHomeSliderComponent } from './slider-filter-search/slider-filter-home-slider/slider-filter-home-slider.component';
import { SliderFilterLatestRentComponent } from './slider-filter-search/slider-filter-latest-rent/slider-filter-latest-rent.component';
import { SliderFilterLatestSaleComponent } from './slider-filter-search/slider-filter-latest-sale/slider-filter-latest-sale.component';
import { SliderFilterNewOfferComponent } from './slider-filter-search/slider-filter-new-offer/slider-filter-new-offer.component';
import { SliderFilterPropertyInCitiesComponent } from './slider-filter-search/slider-filter-property-in-cities/slider-filter-property-in-cities.component';
import { SliderFilterSearchComponent } from './slider-filter-search/slider-filter-search.component';
import { ImageContentBrandComponent } from './image-content/image-content-brand/image-content-brand.component';
import { ModernComponent } from './modern/modern.component';
import { ModernHomeSectionComponent } from './modern/modern-home-section/modern-home-section.component';
import { ParallaxImageComponent } from './parallax-image/parallax-image.component';
import { ParallaxImageHomeSectionComponent } from './parallax-image/parallax-image-home-section/parallax-image-home-section.component';
import { SearchTabComponent } from './search-tab/search-tab.component';
import { SearchTabHomeSectionComponent } from './search-tab/search-tab-home-section/search-tab-home-section.component';
import { TypedImageComponent } from './typed-image/typed-image.component';
import { TypedImageHomeSectionComponent } from './typed-image/typed-image-home-section/typed-image-home-section.component';
import { ModernVideoComponent } from './modern-video/modern-video.component';
import { ModernVideoHomeSectionComponent } from './modern-video/modern-video-home-section/modern-video-home-section.component';
import { MapVSearchComponent } from './map-v-search/map-v-search.component';
import { MapHSearchComponent } from './map-h-search/map-h-search.component';
import { MapVSearchHomeSectionComponent } from './map-v-search/map-v-search-home-section/map-v-search-home-section.component';
import { MapHSearchHomeSectionComponent } from './map-h-search/map-h-search-home-section/map-h-search-home-section.component';
import { HomeSectionPropertyBoxComponent } from './map-h-search/widges/home-section-property-box/home-section-property-box.component';
import { SearchPropertyComponent } from './map-h-search/widges/search-property/search-property.component';

@NgModule({
  declarations: [
    SliderFilterSearchComponent,
    CorporateComponent,
    ClassicComponent,
    EnterpriseComponent,
    SliderFilterHomeSliderComponent,
    SliderFilterLatestSaleComponent,
    SliderFilterFeaturedPropertyComponent,
    SliderFilterLatestRentComponent,
    SliderFilterNewOfferComponent,
    SliderFilterPropertyInCitiesComponent,
    SliderFilterBannerComponent,
    SliderFilterAgentsComponent,
    SliderFilterHappyClientComponent,
    SliderFilterBrandComponent,
    CorporateHomeSliderComponent,
    CorporatePropertyListingComponent,
    CorporateProvidedServicesComponent,
    CorporatePricingPlanComponent,
    CorporateFeaturedPropertyComponent,
    CorporateBannerComponent,
    CorporateAgentsComponent,
    CorporateClientsComponent,
    CorporateLatestBlogComponent,
    EnterpriseHomeSectionComponent,
    EnterprisePropertyServiceComponent,
    EnterprisePropertyOfDayComponent,
    EnterpriseLatestPropertyComponent,
    EnterpriseLookingForComponent,
    EnterpriseFeaturedCityComponent,
    EnterpriseBannerComponent,
    EnterprisePeopleSayComponent,
    EnterpriseLatestBlogComponent,
    EnterpriseBrandComponent,
    ClassicHomeSectionComponent,
    ClassicLatestPropertyComponent,
    ClassicFeaturedPropertyComponent,
    ClassicPropertyServiceComponent,
    ClassicBannerComponent,
    ClassicAgentsComponent,
    ClassicVideoComponent,
    ClassicHappyClientComponent,
    ClassicBrandComponent,
    ClassicPropertyListingComponent,
    ImageContentComponent,
    ImageContentHomeSectionComponent,
    ImageContentBrandComponent,
    ModernComponent,
    ModernHomeSectionComponent,
    ParallaxImageComponent,
    ParallaxImageHomeSectionComponent,
    SearchTabComponent,
    SearchTabHomeSectionComponent,
    TypedImageComponent,
    TypedImageHomeSectionComponent,
    ModernVideoComponent,
    ModernVideoHomeSectionComponent,
    MapVSearchComponent,
    MapHSearchComponent,
    MapVSearchHomeSectionComponent,
    MapHSearchHomeSectionComponent,
    HomeSectionPropertyBoxComponent,
    SearchPropertyComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, CarouselModule],
  exports: [ClassicVideoComponent,ClassicBannerComponent,CorporatePricingPlanComponent]
})
export class HomeModule {}
