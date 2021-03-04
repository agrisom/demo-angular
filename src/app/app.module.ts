import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './pages/layout/main-nav/main-nav.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (http:HttpClient) => { return new TranslateHttpLoader(http, './assets/lang/', '.json')},
          deps: [ HttpClient ]
        }
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
