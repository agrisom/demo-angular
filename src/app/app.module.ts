import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './pages/layout/main-nav/main-nav.component';
import { KanbanComponent } from './pages/kanban/kanban.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
