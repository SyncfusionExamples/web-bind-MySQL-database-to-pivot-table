import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PivotViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
