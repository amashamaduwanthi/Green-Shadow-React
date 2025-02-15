export class Vehicle {
    vehicleCode: string;
    licensePlateNo: string;
    category: string;
    fuelType: string;
    status: string;
    remarks: string;
    staffId: string;

    constructor(vehicleCode: string, licensePlateNo: string, category: string, fuelType: string, status: string, remarks: string, staffId: string) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNo = licensePlateNo;
        this.category = category;
        this.fuelType = fuelType;
        this.status = status;
        this.remarks = remarks;
        this.staffId = staffId;
    }
}
