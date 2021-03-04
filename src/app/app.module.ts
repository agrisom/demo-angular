import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './pages/layout/main-nav/main-nav.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { StatusButtonComponent } from './components/status-button/status-button.component';
import { ErrorComponent } from './pages/error/error.component';
import { TaskDetailModalComponent } from './components/task-detail-modal/task-detail-modal.component';
import { KanbanListComponent } from './components/kanban-list/kanban-list.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { KanbanCardComponent } from './components/kanban-board/kanban-card/kanban-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeEn, 'en');

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    KanbanComponent,
    AddTaskComponent,
    StatusButtonComponent,
    ErrorComponent,
    TaskDetailModalComponent,
    KanbanListComponent,
    KanbanBoardComponent,
    KanbanCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
  providers: [
    {
      provide: LOCALE_ID,
      useValue: localStorage.getItem('userLang') || 'es'
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
