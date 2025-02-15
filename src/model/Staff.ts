export class Staff {
    staffId: string;
    firstName: string;
    lastName: string;
    gender: string;
    dob: Date;
    contactNo: number;
    email: string;
    address: string;
    role: string;
    fieldCode: string;

    constructor(staffId: string, firstName: string, lastName: string, gender: string, dob: Date, contactNo: number, email: string, address: string, role: string, fieldCode: string) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dob = dob;
        this.contactNo = contactNo;
        this.email = email;
        this.address = address;
        this.role = role;
        this.fieldCode = fieldCode;
    }
}