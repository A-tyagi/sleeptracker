import { Component, OnInit } from "@angular/core";
import { SleepService } from "../services/sleep.service";
import { SleepData } from "../data/sleep-data";
import { StanfordSleepinessData } from "../data/stanford-sleepiness-data";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-view-sleepiness",
  templateUrl: "./view-sleepiness.page.html",
  styleUrls: ["./view-sleepiness.page.scss"],
})
export class ViewSleepinessPage implements OnInit {
  sleepinessData: SleepData[];
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
    this.sleepinessData = SleepService.AllSleepinessData;
    this.sortByDate();
  }

  // Sorts all data in chronological order
  sortByDate(): void {
    this.sleepinessData.sort(
      (a: StanfordSleepinessData, b: StanfordSleepinessData) => {
        return a.loggedAt.getTime() - b.loggedAt.getTime();
      }
    );
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
            this.sleepinessData.splice(id, 1);
            this.storage.set("AllSleepinessData", this.sleepinessData);
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
