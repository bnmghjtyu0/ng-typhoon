import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  array = [];
  title = "app";
  apiUrl = "https://tcgbusfs.blob.core.windows.net/blobfs/GetDisasterSummary.json";
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.array = data;
      console.log(data)
    });
  }
}
