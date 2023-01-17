export class Purchases {

    public date: string;
    public cardName: string;
    public amount: number;
    public transactionId: number;
    public imagePath: string;

    constructor(date: string, name: string, amount: number, transactionId: number, imagePath: string) {
        this.date = date;
        this.cardName = name;
        this.amount = amount;
        this.transactionId = transactionId;
        this.imagePath = imagePath;
    }
  
}