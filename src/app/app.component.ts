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
  // googleMap

  // 縮放比例
  zoomValue: number = 8;
  // 經度緯度
  lat: number = 24.1504536;
  lng: number = 120.68325279999999;

  // just an interface for type safety.


  markers: marker[] = [
    {
      lat: 25.132415771484375,
      lng: 121.50299835205078,
      label: "北投",
      iconUrl: "https://cdn1.iconfinder.com/data/icons/orientation-2/32/location-128.png"
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: "B",
      iconUrl: "https://cdn1.iconfinder.com/data/icons/orientation-2/32/location-128.png"
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: "C",
   iconUrl: "https://cdn1.iconfinder.com/data/icons/orientation-2/32/location-128.png"
    }
  ];
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  iconUrl: string;
}



