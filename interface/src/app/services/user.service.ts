import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

import { environment } from "../../environments/environment";

import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public getLoggedInStatus: EventEmitter<any> = new EventEmitter();
  public getLoggedInRole: EventEmitter<any> = new EventEmitter();
  private endpoint = "http://localhost:3000/api/nurse/patients";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  //NoAuth Header
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  //Constructor
  constructor(private http: HttpClient) {}

  //method to get list of patients
  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  //login
  login(authCredentials) {
    return this.http.post(
      environment.apiBaseUrl + "/authenticate",
      authCredentials,
      this.noAuthHeader
    );
  }

  //Post User
  postUser(user: User) {
    return this.http.post(
      environment.apiBaseUrl + "/register",
      user,
      this.noAuthHeader
    );
  }

  //Token
  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  deleteToken() {
    localStorage.removeItem("token");
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split(".")[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) return userPayload.exp > Date.now() / 1000;
    else return false;
  }
}
