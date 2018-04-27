import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './module/header/header.component';
import { SortComponent } from './module/sort/sort.component';
import { SidebarComponent } from './module/sidebar/sidebar.component';
import { OneComponent } from './module/years/one.component';
import { TwoComponent } from './module/years/two.component';
import { ThreeComponent } from './module/years/three.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortComponent,
    SidebarComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
