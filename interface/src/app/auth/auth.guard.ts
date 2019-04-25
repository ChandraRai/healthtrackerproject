import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from "@angular/router";
import { Observable } from "rxjs";

import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedUser = route.data.expectedRole;
    if (
      !this.userService.isLoggedIn() ||
      this.userService.getUserPayload().role !== expectedUser
    ) {
      this.router.navigateByUrl("/login");
      this.userService.deleteToken();
      this.userService.getLoggedInStatus.emit("Inactive");
      this.userService.getLoggedInRole.emit("User");
      return false;
    } else {
      if (route.data.expectedRole == "nurse") {
        this.userService.getLoggedInRole.emit("Nurse");
      } else if (route.data.expectedRole == "patient") {
        this.userService.getLoggedInRole.emit("Patient");
      }
      this.userService.getLoggedInStatus.emit("Active");
      return true;
    }
  }
}
