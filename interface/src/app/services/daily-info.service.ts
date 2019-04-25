import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { DailyInfo } from "../models/daily-info";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class DailyInfoService {
  constructor(private http: HttpClient) {}

  public getList(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + "/patient/daily");
  }

  public deleteItem(_id: string): Observable<any> {
    return this.http.delete(environment.apiBaseUrl + "/patient/daily/" + _id);
  }

  public addItem(info: DailyInfo): Observable<any> {
    return this.http.post<any>(
      environment.apiBaseUrl + "/patient/daily/",
      info
    );
  }

  public updateItem(info: DailyInfo): Observable<any> {
    return this.http.post<any>(
      environment.apiBaseUrl + "/patient/daily/" + info._id,
      info
    );
  }
}
