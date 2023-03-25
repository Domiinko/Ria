import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KontaktyComponent } from './kontakty/kontakty.component';
import { OnasComponent } from './onas/onas.component';
import { LetiskoNitraComponent } from './letisko-nitra/letisko-nitra.component';
import { LeteckaSkolaComponent } from './letecka-skola/letecka-skola.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BodyComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    KontaktyComponent,
    OnasComponent,
    LetiskoNitraComponent,
    LeteckaSkolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
