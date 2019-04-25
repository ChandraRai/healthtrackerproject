import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Clinic } from "../../../models/clinic";
import { ClinicService } from "src/app/services/clinic.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-patient-clinic-add',
  templateUrl: './patient-clinic-add.component.html',
  styleUrls: ['./patient-clinic-add.component.css']
})
export class PatientClinicAddComponent implements OnInit {
  public clinic = new Clinic();
  public patientId: string;
  public _id: string;


  constructor(private route: ActivatedRoute,
    public clinicService: ClinicService,
    public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patientId = params._id;
    });
  }

  onSubmitPatientClinic(form: NgForm): void {

    this.clinic = form.value;
    this.clinic.patient = this.patientId;
    if (localStorage.getItem("clinicId")) {
      this.clinic._id = localStorage.getItem("clinicId");
      this.clinicService.updateClinic(this.clinic).subscribe(data => {
        localStorage.removeItem("clinicId");
        this.router.navigateByUrl("/nurse");
      });
    } else {
      this.clinicService.addList(this.clinic).subscribe(data => {
        this.router.navigateByUrl("/nurse");
      });
    }
 }

}
