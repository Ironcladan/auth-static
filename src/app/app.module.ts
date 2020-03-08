import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { ChartsModule } from "ng2-charts";

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { DashComponent } from './dash/dash.component';
import { TreeComponent } from './tree/tree.component';
import { AddComponent } from './add/add.component';
import { DelComponent } from './del/del.component';
import { ConfigComponent } from './config/config.component';
import { FaultComponent } from "./fault/fault.component";
import { EditComponent } from "./edit/edit.component";
import { AngmapComponent } from './angmap/angmap.component';
import { MetaComponent } from './meta/meta.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        ChartsModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        DashComponent,
        TreeComponent,
        AddComponent,
        DelComponent,
        ConfigComponent,
        FaultComponent,
        EditComponent,
        AngmapComponent,
        MetaComponent  
     ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }