export class Field {
    fieldCode: string;
    fieldName: string;
    location: string;
    extendSize: string;
    fieldImage: string;

    constructor(fieldCode: string, fieldName: string, location: string, extendSize: string, fieldImage: string) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.location = location;
        this.extendSize = extendSize;
        this.fieldImage = fieldImage;
    }
}
