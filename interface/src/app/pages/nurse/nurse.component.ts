import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../../models/user';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {
  users: User[];
  title: String;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private flashMessage: FlashMessagesService,
    ) {

  }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.users = new Array<User>();
    this.displayUsers();
  }

  displayUsers(): void {
    this.userService.getList().subscribe(data => {
      //console.log(data);
      this.users = data;
  });
 }
}
