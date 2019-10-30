import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './views/product/product.component';
import { DataService } from './service/data.service';
import { ProductDataService } from './views/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store/store';
import { createLogger } from 'redux-logger';
import { DisplayComponent } from './views/product/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [
    DataService,
    ProductDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    let logger = isDevMode() ? [createLogger()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, logger);
  }
}
