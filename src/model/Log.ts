export default class MonitoringLog {
    LogCode!: string;
    date!: string;
    observation!: string;
    LogImage!: string;

    constructor(LogCode: string, date: string, observation: string, LogImage: string) {
        this.LogCode = LogCode;
        this.date = date;
        this.observation = observation;
        this.LogImage = LogImage;
    }
}
