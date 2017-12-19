import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  disasterData = [];
  title = "app";
  apiUrl = "https://tcgbusfs.blob.core.windows.net/blobfs/GetDisasterSummary.json";
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe((data: any) => {
      data = data.DataSet["diffgr:diffgram"].NewDataSet.CASE_SUMMARY;
      this.disasterData = data;
    });
  }

  sel = [];
  selectedObject: string = "";
  countries = [
    { name: "全部" },
    { name: "萬華區" },
    { name: "中正區" },
    { name: "大同區" },
    { name: "中山區" },
    { name: "大安區" },
    { name: "南港區" },
    { name: "文山區" },
    { name: "中正區" },
    { name: "松山區" },
    { name: "信義區" },
    { name: "士林區" },
    { name: "北投區" },
    { name: "內湖區" }
  ];
}
