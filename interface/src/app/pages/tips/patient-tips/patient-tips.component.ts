import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TipsService } from "src/app/services/tips.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Tips } from "../../../models/tips";

@Component({
  selector: "app-patient-tips",
  templateUrl: "./patient-tips.component.html",
  styleUrls: ["./patient-tips.component.css"]
})
export class PatientTipsComponent implements OnInit {
  tips: Tips[];
  title: String;

  constructor(
    private route: ActivatedRoute,
    private tipsService: TipsService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.tips = new Array<Tips>();
    this.displayTips();
  }

  displayTips(): void {
    this.tipsService.getTips().subscribe(data => {
      //console.log(data);
      this.tips = data;
    });
  }
}
