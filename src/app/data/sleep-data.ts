import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from "@angular/platform-browser";
import { generate } from "shortid";

export class SleepData {
  id: string;
  loggedAt: Date;

  //Optional paramaters so that the original id and loggetAt times can be retained on app close
  constructor(id?: string, loggedAt?: Date) {
    //Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
    if (id && loggedAt) {
      this.id = id;
      this.loggedAt = loggedAt;
    } else {
      this.id = generate();
      this.loggedAt = new Date();
    }
  }

  summaryString(): string {
    return "Unknown sleep data";
  }

  dateString(): string {
    return this.loggedAt.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }
}
