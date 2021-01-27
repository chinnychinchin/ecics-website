import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main.component';
import { AboutComponent } from './components/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MotorComponent } from './components/motor.component';

const ROUTES: Routes = [

{path: '', component: MainComponent},
{path: 'about', component: AboutComponent},
{path: 'motor', component: MotorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    MotorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES),
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
