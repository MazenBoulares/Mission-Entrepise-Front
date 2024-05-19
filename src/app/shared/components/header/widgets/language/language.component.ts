import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {

  public languageOpen: boolean = false;

  public languages = [
    {
      name: 'English',
      code: 'en',
    },
    {
      name: 'French',
      code: 'fr',
    },
    {
      name: 'Arabic',
      code: 'ar',
    },
    {
      name: 'Spanish',
      code: 'sp',
    },
  ];

  constructor(
    private translate: TranslateService,
  ){}

  openLanguage() {
    this.languageOpen = !this.languageOpen;
  }

  changeLanguage(code:string) {
    this.translate.use(code);
  }

  clickOutside(): void {
    this.languageOpen = false
  }
}
