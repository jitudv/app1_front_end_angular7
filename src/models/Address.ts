export class Address{
  id:number


  constructor(private pin,private house:string ,private city:string,private colony:string){ }

  public getPin():string
  {
    return this.pin;
  }
  public setPin(pin:string)
  {
    this.pin=pin;
  }

}
