import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { LocalStorageService } from "../services/local-storage/local-storage.service";

@Component({
  selector: 'mds-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.sass']
})
export class LanguageMenuComponent implements OnInit {
  private readonly storageKey = "lang";
  language = 'fr';

  constructor(private translate: TranslateService, private storageService: LocalStorageService) { }

  ngOnInit(): void {
    const lang = this.storageService.getData(this.storageKey);
    if (lang) this.changeLanguage(lang);
  }

  changeLanguage(localeCode: string): void {
    if (localeCode) {
      this.language = localeCode;
      this.storageService.setData(this.storageKey, localeCode);
      this.translate.use(localeCode);
    }
  }
}
