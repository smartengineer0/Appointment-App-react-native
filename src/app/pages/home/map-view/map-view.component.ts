import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { BookingComponent} from './../../../shared/modal/booking/booking.component'
@Component({
  selector: "app-map-view",
  templateUrl: "./map-view.component.html",
  styleUrls: ["./map-view.component.scss"],
})
export class MapViewComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}
  async presentModal() {
  }
}
