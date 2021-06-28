import { Injectable } from "@angular/core";
import { SleepData } from "../data/sleep-data";
import { OvernightSleepData } from "../data/overnight-sleep-data";
import { StanfordSleepinessData } from "../data/stanford-sleepiness-data";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class SleepService {
  private static LoadDefaultData: boolean = true;
  public static AllSleepData: SleepData[] = [];
  public static AllOvernightData: OvernightSleepData[] = [];
  public static AllSleepinessData: StanfordSleepinessData[] = [];

  constructor(public storage: Storage) {
    
    // Load overnight data from local storage and recreate objects
    this.storage.get("AllOvernightData").then((savedOvernightData) => {
      for (var i = 0; i < savedOvernightData.length; i++) {
        this.createOvernightObj(savedOvernightData[i]);
      }
    });

    // Load Sleepiness data from local storage and recreate objects
    this.storage.get("AllSleepinessData").then((savedSleepinessData) => {
      for (var i = 0; i < savedSleepinessData.length; i++) {
        this.createSleepinessObj(savedSleepinessData[i]);
      }
    });
  }

  private createOvernightObj(overnightObject: any) {
    var id = overnightObject.id;
    var loggedAt = overnightObject.loggedAt;
    var sleepStart = overnightObject.sleepStart;
    var sleepEnd = overnightObject.sleepEnd;
    var newOvernight = new OvernightSleepData(
      sleepStart,
      sleepEnd,
      id,
      loggedAt
    );
    SleepService.AllOvernightData.push(newOvernight);
  }

  private createSleepinessObj(sleepinessObject: any) {
    var id = sleepinessObject.id;
    var loggedAt = sleepinessObject.loggedAt;
    var loggedValue = sleepinessObject.loggedValue;
    var newSleepiness = new StanfordSleepinessData(loggedValue, loggedAt, id);
    SleepService.AllSleepinessData.push(newSleepiness);
  }

  private addDefaultData() {
    this.logOvernightData(
      new OvernightSleepData(
        new Date("November 17, 2019 01:03:00"),
        new Date("November 17, 2019 09:25:00")
      )
    );
    this.logSleepinessData(
      new StanfordSleepinessData(4, new Date("November 17, 2019 14:38:00"))
    );
    this.logOvernightData(
      new OvernightSleepData(
        new Date("November 18, 2019 08:03:00"),
        new Date("November 18, 2019 23:11:00")
      )
    );
  }

  public logOvernightData(sleepData: OvernightSleepData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
  }

  public logSleepinessData(sleepData: StanfordSleepinessData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
  }
}
