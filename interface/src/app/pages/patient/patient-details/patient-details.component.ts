import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Clinic } from "../../../models/clinic";
import { ClinicService } from "src/app/services/clinic.service";
import { User } from "../../../models/user";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-patient-details",
  templateUrl: "./patient-details.component.html",
  styleUrls: ["./patient-details.component.css"]
})
export class PatientDetailsComponent implements OnInit {
  clinicDetails: Array<Clinic>;
  patientId: string;

  //title: String;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public clinicService: ClinicService
  ) {}

  ngOnInit() {
    //Get _id from params in order to get clinic data
    this.route.params.subscribe(params => {
      this.patientId = params._id;
    });

    this.displayClinic();
  }

  displayClinic(): void {
    this.clinicService.getList(this.patientId).subscribe(data => {
      //console.log(data);
      this.clinicDetails = data;
    });
  }

  onDelete(_id: string) {
    if (confirm("Are you sure to delete this record ?") == true) {
      this.clinicService.deleteList(_id).subscribe(res => {});
      this.displayClinic();
    }
  }

  onEdit(clinicId: string) {
    localStorage.setItem("clinicId", clinicId);
    this.router.navigateByUrl("/patient-clinic-update/" + this.patientId);
  }
}
