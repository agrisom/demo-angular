import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'demo-angular';
  supportLanguages = ['en', 'es'];

  constructor(private translateService: TranslateService) {
    var userLang = localStorage.getItem("userLang") || navigator.language.substr(0,2);
    localStorage.setItem("userLang", userLang);

    translateService.addLangs(this.supportLanguages);
    translateService.setDefaultLang('es');
    translateService.use(userLang);
  }
}
