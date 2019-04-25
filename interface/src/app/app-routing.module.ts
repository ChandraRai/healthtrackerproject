import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { componentFactoryName } from "@angular/compiler";
import { HomeComponent } from "./pages/home/home.component";
import { NurseComponent } from "./pages/nurse/nurse.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { VideosComponent } from "./pages/videos/videos.component";
import { TipsComponent } from "./pages/tips/tips.component";
import { DailyInfoComponent } from "./pages/daily-info/daily-info.component";
import { DailyInfoUpdateComponent } from "./pages/daily-info/daily-info-update/daily-info-update.component";
import { PatientTipsComponent } from "./pages/tips/patient-tips/patient-tips.component";
import { PatientDetailsComponent } from "./pages/patient/patient-details/patient-details.component";
import { PatientClinicUpdateComponent } from "./pages/patient/patient-clinic-update/patient-clinic-update.component";
import { PatientClinicAddComponent } from "./pages/patient/patient-clinic-add/patient-clinic-add.component";

import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Final Project" } },
  {
    path: "nurse",
    component: NurseComponent,
    data: { title: "Nurse Account", expectedRole: "nurse" },
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "signup", component: SignupComponent, data: { title: "Sign Up" } },
  {
    path: "videos",
    component: VideosComponent,
    data: { title: "Videos", expectedRole: "patient" },
    canActivate: [AuthGuard]
  },
  {
    path: "patient-tips",
    component: PatientTipsComponent,
    data: { title: "Patients", expectedRole: "patient" },
    canActivate: [AuthGuard]
  },
  {
    path: "patient-daily",
    component: DailyInfoComponent,
    data: { title: "Patients", expectedRole: "patient" },
    canActivate: [AuthGuard]
  },
  {
    path: "patient-daily-update",
    component: DailyInfoUpdateComponent,
    data: { title: "Patients", expectedRole: "patient" },
    canActivate: [AuthGuard]
  },
  {
    path: "patient-details",
    component: PatientDetailsComponent,
    data: { title: "Nurse Account", expectedRole: "nurse" },
    canActivate: [AuthGuard]
  },
  {
    path: "patient-details/:_id",
    component: PatientDetailsComponent,
    data: { title: "Nurse Account", expectedRole: "nurse" },
    canActivate: [AuthGuard]
  },
  {
    path: "patient-clinic-update/:_id",
    component: PatientClinicUpdateComponent,
    data: { title: "Nurse Account", expectedRole: "nurse" },
    canActivate: [AuthGuard]
  },
  {
    path: "patient-clinic-add/:_id",
    component: PatientClinicAddComponent,
    data: { title: "Nurse Account", expectedRole: "nurse" },
    canActivate: [AuthGuard]
  },
  {
    path: "nurse/tips/:_id",
    component: TipsComponent,
    data: { title: "Nurse Account", expectedRole: "nurse" },
    canActivate: [AuthGuard]
  },

  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
