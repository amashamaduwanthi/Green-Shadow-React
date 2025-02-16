export class Equipment {
    equipmentId: string;
    name: string;
    type: string;
    status: string;
    fieldCode: string;
    staffId: string;

    constructor(equipmentId: string, name: string, type: string, status: string, fieldCode: string, staffId: string) {
        this.equipmentId = equipmentId;
        this.name = name;
        this.type = type;
        this.status = status;
        this.fieldCode = fieldCode;
        this.staffId = staffId;
    }
}
