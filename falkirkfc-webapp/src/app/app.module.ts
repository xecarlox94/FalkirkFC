import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';
import { MainNavComponent } from './base/main-nav/main-nav.component';
import { UserAuthInterceptor } from './core/services/http-interceptors/user-auth-interceptor.service';
import { AboutUsComponent } from './base/about-us/about-us.component';


@NgModule({
  imports: [ // all needed modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [ // services, including interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }
  ],
  declarations: [ // components 
    AppComponent,
    MainNavComponent,
    AboutUsComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
