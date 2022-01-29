export class Invoice {
  //   readonly client: string; //i can read from outside but cant change the value
  //    private details: string; // now i cant access to details directly from outside
  //   public  amount: number; //its default value and everone can make arregement on it

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    //constructor(c: string, d: string, a: number) { i can also use like this
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.client} owes €${this.amount} for ${this.details}`;
  }
}
