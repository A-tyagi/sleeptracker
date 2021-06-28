import { Component } from "@angular/core";
import { SleepService } from "../services/sleep.service";
import { SleepData } from "../data/sleep-data";
import { OvernightSleepData } from "../data/overnight-sleep-data";
import { StanfordSleepinessData } from "../data/stanford-sleepiness-data";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  start: any;
  end: any;
  ratingTime: any;
  ratingLevel: any;

  constructor(
    public sleepService: SleepService,
    public navCtrl: NavController,
    public storage: Storage,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  // Navigates to overnight page
  goToOvernight() {
    this.navCtrl.navigateForward("/view-overnight");
  }

  // Navigates to sleepiness page
  goToSleepiness() {
    this.navCtrl.navigateForward("/view-sleepiness");
  }

  /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
  get allSleepData() {
    return SleepService.AllSleepData;
  }

  // Called on sleep session save button click
  saveSleepSession(sleepStart: any, sleepEnd: any) {
    //Rejects invalid input and alerts the user
    if (this.start > this.end || this.start === this.end) {
      this.start = "";
      this.end = "";
      this.presentAlert();
      return;
    }

    // Save to service and local storage
    var newSleep = new OvernightSleepData(
      new Date(sleepStart),
      new Date(sleepEnd)
    );
    this.sleepService.logOvernightData(newSleep);
    this.storage.set("AllOvernightData", SleepService.AllOvernightData);

    // Clear data fields and present success toast
    this.start = "";
    this.end = "";
    this.presentToast();
  }

  // Called on sleepiness save click
  saveRating(ratingTime: any, ratingLevel: any) {
    var newRating = new StanfordSleepinessData(
      ratingLevel,
      new Date(ratingTime)
    );
    // Save to service and local storage
    this.sleepService.logSleepinessData(newRating);
    this.storage.set("AllSleepinessData", SleepService.AllSleepinessData);
    // Clear data fields and present success toast
    this.ratingTime = "";
    this.ratingLevel = "";
    this.presentToast();
  }

  // Shows alert for invalid input
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Error: Invalid Input",
      message: "Sleep Data Not Saved!",
      buttons: ["OK"],
    });
    await alert.present();
  }

  // Shows toast for succesful save
  async presentToast() {
    const toast = await this.toastController.create({
      color: "tertiary",
      duration: 2000,
      message: "Sleep Session Saved!",
      showCloseButton: false,
    });
    await toast.present();
  }
}
