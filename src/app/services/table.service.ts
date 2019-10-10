import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Papa } from "ngx-papaparse";
import { map } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class TableService {

  list$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private papa: Papa) {
  this.getTableData().subscribe(data => {
    });
  }

  getTableData() {
    return this.http
      .get("assets/FL_insurance_sample.csv", { responseType: "text" })
      .pipe(
        map(data => {
          this.papa.parse(data, {
            header: true,
            complete: result => {
              console.log("Parsed", result.data.slice(0, 1000));
              this.list$.next(result.data.slice(0, 1000));
              return result.data;
            }
          });
        })
      );
  }


}
