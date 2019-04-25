import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { DailyInfoService } from "src/app/services/daily-info.service";
import { DailyInfo } from "src/app/models/daily-info";

@Component({
  selector: "app-daily-info-update",
  templateUrl: "./daily-info-update.component.html",
  styleUrls: ["./daily-info-update.component.css"]
})
export class DailyInfoUpdateComponent implements OnInit {
  title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infoService: DailyInfoService
  ) {}

  model = new DailyInfo();

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    //Get _id from params in order to get clinic data
  }

  onSubmit(form: NgForm) {
    if (localStorage.getItem("infoId")) {
      this.model = form.value;
      this.model._id = localStorage.getItem("infoId");
      this.infoService.updateItem(this.model).subscribe(
        res => {
          localStorage.removeItem("infoId");
          this.router.navigateByUrl("/patient-daily");
        },
        err => {}
      );
    } else {
      this.infoService.addItem(form.value).subscribe(
        res => {
          this.router.navigateByUrl("/patient-daily");
        },
        err => {}
      );
    }
  }
}
