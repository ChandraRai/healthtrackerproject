//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

//Components
import { AppComponent } from "./app.component";
import { NurseComponent } from "./pages/nurse/nurse.component";
import { HeaderComponent } from "./partials/header/header.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { PatientDetailsComponent } from "./pages/patient/patient-details/patient-details.component";
import { PatientClinicUpdateComponent } from "./pages/patient/patient-clinic-update/patient-clinic-update.component";

//Services
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
//Authorization
import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { UserService } from "./services/user.service";
import { VideosComponent } from "./pages/videos/videos.component";
import { TipsComponent } from './pages/tips/tips.component';
import { PatientTipsComponent } from './pages/tips/patient-tips/patient-tips.component';
import { DailyInfoComponent } from './pages/daily-info/daily-info.component';
import { DailyInfoUpdateComponent } from './pages/daily-info/daily-info-update/daily-info-update.component';
import { PatientClinicAddComponent } from './pages/patient/patient-clinic-add/patient-clinic-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NurseComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    VideosComponent,
    PatientDetailsComponent,
    PatientClinicUpdateComponent,
    TipsComponent,
    PatientTipsComponent,
    DailyInfoComponent,
    DailyInfoUpdateComponent,
    PatientClinicAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [
    FlashMessagesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
