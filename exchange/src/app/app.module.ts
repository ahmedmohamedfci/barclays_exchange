import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { ExchangeTableComponent } from './components/exchange-table/exchange-table.component';
import { DisplayButtonComponent } from './components/display-button/display-button.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { CommunicatorService } from './services/communicator.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    DateSelectorComponent,
    ExchangeTableComponent,
    DisplayButtonComponent,
    MainWrapperComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule
  ],
  providers: [CommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
