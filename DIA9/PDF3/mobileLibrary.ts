import { Mobile } from "../PDF2/mobile"

Mobile

export class MobileLibrary{
    private name:string
    private location:string
    private mobiles:Mobile[]
    private totalPrice:number

    constructor(name:string, location:string, mobiles:Mobile[]){
        this.name = name
        this.location = location
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }
    public getName():string{
        return this.name
    }
    public getLocation():string{
        return this.location
    }
    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public getTotalPrice():number{
        return this.totalPrice
    }
    public setName(name:string){
        this.name = name
    }
    public setLocation(location:string){
        this.location = location
    }
    public setMobiles(mobiles:Mobile[]){
        this.mobiles = mobiles
    }
    public setTotalPrice(totalPrice:number){
        this.totalPrice = totalPrice
    }
    private totalPriceCalculation():number{
        let precio:number = 0;
        for(let i = 0; i < this.mobiles.length; i++){
            precio += this.mobiles[i].getPrice()
        }

        return precio
    }
    // printCarac():void{

    //     let caracteristicas : string = ""
    //     for(let i =0; i < this.mobiles.length; i++){
    //         caracteristicas += "Sus caracteristicas son : " + this.name[i] + ", " + this.location + ", " 
    //     }
    // }
    printLibrary():void{
        let precio:string = ""
        for(let i = 0; i < this.mobiles.length; i++){
            precio += "Estos son todos los moviles: " + "\n" + this.mobiles[i] + "\n" +
            "Precio total : " + this.totalPriceCalculation()
        }
        console.log(precio);
        
    }
}