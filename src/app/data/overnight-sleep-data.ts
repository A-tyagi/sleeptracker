import { SleepData } from "./sleep-data";

export class OvernightSleepData extends SleepData {
  public sleepStart: Date;
  public sleepEnd: Date;

  //Optional paramaters so that the original id and loggetAt times can be retained on app close
  constructor(sleepStart: Date, sleepEnd: Date, id?: string, loggedAt?: Date) {
    if (id && loggedAt) {
      super(id, loggedAt);
    } else {
      super();
    }
    this.sleepStart = sleepStart;
    this.sleepEnd = sleepEnd;
  }

  summaryString(): string {
    var sleepStart_ms = this.sleepStart.getTime();
    var sleepEnd_ms = this.sleepEnd.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = sleepEnd_ms - sleepStart_ms;

    // Convert to hours and minutes
    return (
      Math.floor(difference_ms / (1000 * 60 * 60)) +
      " hours, " +
      Math.floor((difference_ms / (1000 * 60)) % 60) +
      " minutes"
    );
  }

  dateString(): string {
    return this.sleepStart.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
}
