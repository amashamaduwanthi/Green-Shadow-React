export class Crop {
    cropId: string;
    cropName: string;
    cropImage: string;
    category: string;
    season: string;
    fieldCode: string;

    constructor(cropId: string, cropName: string, cropImage: string, category: string, season: string, fieldCode: string) {
        this.cropId = cropId;
        this.cropName = cropName;
        this.cropImage = cropImage;
        this.category = category;
        this.season = season;
        this.fieldCode = fieldCode;
    }
}
