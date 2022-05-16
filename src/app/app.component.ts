import {Component} from "@angular/core";
import {faSearch, faNewspaper, faMapMarked, faVideo, faImages, faEllipsisV, faTh, faAngleUp, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import data from "../data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = data;
  faSearch = faSearch;
  faNewspaper = faNewspaper;
  faMapMarked = faMapMarked;
  faVideo = faVideo;
  faImages = faImages;
  faEllipsisV = faEllipsisV;
  faTh = faTh;
  faAngleUp = faAngleUp;
  faShareAlt = faShareAlt;
}
