import { Component, OnInit } from "@angular/core";

import { videos } from "src/app/models/videos";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent {
  playerVars = {
    cc_lang_pref: "en"
  };
  public videos;
  public player;
  public ytEvent;

  constructor() {
    this.videos = videos;
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
