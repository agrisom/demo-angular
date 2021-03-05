import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './pages/layout/main-nav/main-nav.component';
import { TaskComponent } from './pages/tasks/task.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { OtherComponent } from './pages/other/other.component';
import { CustomTimePipe } from './pipes/custom-time.pipe';
import { MyCustomDatePipe } from './pipes/my-custom-date.pipe';
import { ViewMenuComponent } from './pages/tasks/view-menu/view-menu.component';
import { TaskFilterComponent } from './pages/tasks/task-filter/task-filter.component';
import { TestComponent } from './pages/test/test.component';
import { TaskGroupComponent } from './pages/tasks/task-group/task-group.component';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeEn, 'en');

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TaskComponent,
    AddTaskComponent,
    StatusButtonComponent,
    ErrorComponent,
    TaskDetailModalComponent,
    KanbanListComponent,
    KanbanBoardComponent,
    KanbanCardComponent,
    OtherComponent,
    CustomTimePipe,
    MyCustomDatePipe,
    ViewMenuComponent,
    TaskFilterComponent,
    TestComponent,
    TaskGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
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
