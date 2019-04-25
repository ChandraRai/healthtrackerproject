import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { TipsService } from "src/app/services/tips.service";
import { Tips } from "src/app/models/tips";

@Component({
  selector: "app-tips",
  templateUrl: "./tips.component.html",
  styleUrls: ["./tips.component.css"]
})
export class TipsComponent implements OnInit {
  title: string;
  patientId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipsService: TipsService
  ) {}

  model = new Tips();

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    //Get _id from params in order to get clinic data
    this.route.params.subscribe(params => {
      this.patientId = params._id;
    });
  }

  onSubmit(form: NgForm) {
    this.model.patient = this.patientId;
    this.tipsService.addTips(this.model).subscribe(
      res => {
        this.router.navigateByUrl("/nurse");
      },
      err => {}
    );
  }
}
