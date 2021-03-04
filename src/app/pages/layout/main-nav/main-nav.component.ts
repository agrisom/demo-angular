import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})
export class MainNavComponent implements OnInit {

  constructor(private translateService : TranslateService) { }

  ngOnInit(): void {
  }

  isSpanish() {
    return this.translateService.currentLang == 'es';
  }

  changeLocale(language) {
    localStorage.setItem("userLang", language);
    this.translateService.use(language);
  }
}
