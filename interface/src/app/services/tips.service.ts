import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Tips } from "../models/tips";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class TipsService {
  constructor(private http: HttpClient) {}

  public getTips(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + "/patient/tips");
  }

  public addTips(tips: Tips): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + "/nurse/tips/", tips);
  }
}
