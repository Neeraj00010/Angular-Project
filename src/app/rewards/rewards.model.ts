export class Rewards {

    public cardName: string;
    public minAmount: number;
    public maxAmount: number;
    public points: number;
    public imagePath: string;

    constructor(name: string, minAmount: number, maxAmount: number, points: number, imagePath: string) {
        this.cardName = name;
        this.minAmount = minAmount;
        this.maxAmount = maxAmount;
        this.points = points;
        this.imagePath = imagePath;
    }
}