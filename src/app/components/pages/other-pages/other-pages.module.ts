import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { OtherPagesRoutingModule } from './other-pages-routing.module';

import { AboutUs1Component } from './about-us1/about-us1.component';
import { AboutUs1DetailsComponent } from './about-us1/widgets/about-us1-details/about-us1-details.component';
import { WhyChooseUsComponent } from './about-us1/widgets/why-choose-us/why-choose-us.component';
import { AboutUs2Component } from './about-us2/about-us2.component';
import { AboutUs2DetailsComponent } from './about-us2/widgets/about-us2-details/about-us2-details.component';
import { ComingSoon1Component } from './coming-soon1/coming-soon1.component';
import { ComingSoon2Component } from './coming-soon2/coming-soon2.component';
import { ComingSoon3Component } from './coming-soon3/coming-soon3.component';
import { ErrorPage404Component } from './error-page404/error-page404.component';
import { FaqComponent } from './faq/faq.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogInComponent } from './log-in/log-in.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServicesComponent } from './services/services.component';
import { SignUpWizardComponent } from './sign-up-wizard/sign-up-wizard.component';
import { WizardStepComponent } from './sign-up-wizard/widgets/wizard-step/wizard-step.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { AccountInformationComponent } from './widgets/account-information/account-information.component';
import { AddressInformationComponent } from './widgets/address-information/address-information.component';
import { CompletedFormComponent } from './widgets/completed-form/completed-form.component';
import { LoginFormComponent } from './widgets/login-form/login-form.component';
import { SignUpFormComponent } from './widgets/sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [
    AboutUs1Component,
    AboutUs2Component,
    ServicesComponent,
    PricingComponent,
    ComingSoon1Component,
    ComingSoon2Component,
    ComingSoon3Component,
    AboutUs1DetailsComponent,
    WhyChooseUsComponent,
    AboutUs2DetailsComponent,
    ErrorPage404Component,
    FaqComponent,
    LogInComponent,
    SignUpComponent,
    LoginFormComponent,
    SignUpFormComponent,
    SignUpWizardComponent,
    AccountInformationComponent,
    AddressInformationComponent,
    CompletedFormComponent,
    WizardStepComponent,
    ForgotPasswordComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    CommonModule,
    OtherPagesRoutingModule,
    SharedModule,
    NgbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OtherPagesModule {}
