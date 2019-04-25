import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Clinic } from "../../../models/clinic";
import { ClinicService } from "src/app/services/clinic.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-patient-clinic-update",
  templateUrl: "./patient-clinic-update.component.html",
  styleUrls: ["./patient-clinic-update.component.css"]
})
export class PatientClinicUpdateComponent implements OnInit {
  public clinic = new Clinic();
  public patientId: string;
  public _id: string;

  constructor(
    public route: ActivatedRoute,
    public clinicService: ClinicService,
    public router: Router
  ) {}

  ngOnInit() {
    //Get _id from params in order to get clinic data
    this.route.params.subscribe(params => {
      this._id = params._id;
    });

    this.route.params.subscribe(params => {
      this.patientId = params._id;
    });


    this.displayClinic();
  }

  displayClinic(): void {
    this.clinicService.getListOfClinic(this._id).subscribe(data => {
      //console.log(data);
      this.clinic = data;
    });
  }

  onSubmitPatientClinicUpdate(form: NgForm): void {

    /*
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
    */
   this.clinicService.updateClinic(this.clinic).subscribe(data => {
    console.log(data);
    this.router.navigateByUrl("/nurse");
  })
  }
}
