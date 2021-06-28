import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { SleepService } from "../services/sleep.service";
import { SleepData } from "../data/sleep-data";
import { OvernightSleepData } from "../data/overnight-sleep-data";
import { Storage } from "@ionic/storage";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-view-overnight",
  templateUrl: "./view-overnight.page.html",
  styleUrls: ["./view-overnight.page.scss"],
})
export class ViewOvernightPage implements OnInit {
  overnightData: SleepData[];

  constructor(
    public navCtrl: NavController,
    public sleepService: SleepService,
    public storage: Storage,
    public alertController: AlertController
  ) {}
  
  // Called to go to home page
  back() {
    this.navCtrl.back();
  }
  // Sorts all data in chronological order onInit
  ngOnInit() {
    this.overnightData = SleepService.AllOvernightData;
    this.sortByDate();
  }

  // Sorts all data in chronological order
  sortByDate(): void {
    this.overnightData.sort((a: OvernightSleepData, b: OvernightSleepData) => {
      return a.sleepStart.getTime() - b.sleepStart.getTime();
    });
  }

  // Called when user clicks delete on a card.
  // Shows alert confirm deletion action.
  async presentAlert(id: number) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Are you sure you want to delete?",
      buttons: [
        {
          text: "Yes",
          role: "Yes",
          handler: () => {
            //If user confirms that they want to delete
            //Splice data and resave data array to storage
            this.overnightData.splice(id, 1);
            this.storage.set("AllOvernightData", this.overnightData);
          },
        },
        {
          text: "Cancel",
          role: "Cancel",
          handler: () => {
            return;
          },
        },
      ],
    });
    await alert.present();
  }
}
