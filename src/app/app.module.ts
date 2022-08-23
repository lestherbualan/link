import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { HeaderComponent } from './components/messenger/header/header.component';
import { SidebarComponent } from './components/messenger/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MessengerComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
