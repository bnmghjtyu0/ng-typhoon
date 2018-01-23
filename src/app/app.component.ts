import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MouseEvent } from "@agm/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  disasterData = [];
  title = "app";
  apiUrl = "https://tcgbusfs.blob.core.windows.net/blobfs/GetDisasterSummary.json";
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      data = data.DataSet["diffgr:diffgram"].NewDataSet.CASE_SUMMARY;
      this.disasterData.push(data)
      console.log(data)
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
  // googleMap

  // 縮放比例
  zoomValue: number = 6;
  // 經度緯度
  lat: number = 24.1504536;
  lng: number = 120.68325279999999;

  // just an interface for type safety.

  markers: marker[] = [];
  onChange(target: HTMLInputElement) {
    this.markers.length = 0;
    for (let i = 0, Len = this.disasterData.length; i < Len; i++) {
      // console.log(this.disasterData[i]);
      if (target.name == this.disasterData[i].CaseLocationDistrict) {
        let obj = {
          lat: parseFloat(this.disasterData[i].Wgs84Y),
          lng: parseFloat(this.disasterData[i].Wgs84X),
          label: this.disasterData[i].CaseLocationDistrict,
          house: this.disasterData[i].CaseCommunicatorUnit,
          description: this.disasterData[i].CaseDescription,
          time: this.disasterData[i].CaseTime,
          address: this.disasterData[i].CaseLocationDescription,
          iconUrl:
            "https://cdn1.iconfinder.com/data/icons/orientation-2/32/location-128.png"
        };
        this.markers.push(obj);
      } else if (target.name == "全部") {
        let obj = {
          lat: parseFloat(this.disasterData[i].Wgs84Y),
          lng: parseFloat(this.disasterData[i].Wgs84X),
          label: this.disasterData[i].CaseLocationDistrict,
          house: this.disasterData[i].CaseCommunicatorUnit,
          description: this.disasterData[i].CaseDescription,
          time: this.disasterData[i].CaseTime,
          address: this.disasterData[i].CaseLocationDescription,
          iconUrl:
            "https://cdn1.iconfinder.com/data/icons/orientation-2/32/location-128.png"
        };
        this.markers.push(obj);
      }
    }
  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  iconUrl: string;
}
