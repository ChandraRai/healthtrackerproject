import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DailyInfo } from "../../models/daily-info";
import { DailyInfoService } from "src/app/services/daily-info.service";

@Component({
  selector: "app-daily-info",
  templateUrl: "./daily-info.component.html",
  styleUrls: ["./daily-info.component.css"]
})
export class DailyInfoComponent implements OnInit {
  infoDetails: Array<DailyInfo>;
  patientId: string;

  //title: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dailyService: DailyInfoService
  ) {}

  ngOnInit() {
    //Get _id from params in order to get clinic data
    this.route.params.subscribe(params => {
      this.patientId = params._id;
    });
    this.displayDailyInfo();
  }

  displayDailyInfo(): void {
    this.dailyService.getList().subscribe(data => {
      //console.log(data);
      this.infoDetails = data;
    });
  }

  onDelete(_id: string) {
    if (confirm("Are you sure to delete this record ?") == true) {
      this.dailyService.deleteItem(_id).subscribe(res => {});
      this.displayDailyInfo();
    }
  }
  onEdit(infoId: string) {
    localStorage.setItem("infoId", infoId);
    this.router.navigateByUrl("/patient-daily-update");
  }
}
