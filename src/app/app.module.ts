import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//graficos
import { ChartsModule } from 'ng2-charts';

//routes
import { APP_ROUTING } from './app.routes';


//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

import { HttpClientModule } from '@angular/common/http';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    StatisticsComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    APP_ROUTING

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
