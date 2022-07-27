"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var mobile_1 = require("../PDF2/mobile");
mobile_1.Mobile;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var precio = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            precio += this.mobiles[i].getPrice();
        }
        return precio;
    };
    // printCarac():void{
    //     let caracteristicas : string = ""
    //     for(let i =0; i < this.mobiles.length; i++){
    //         caracteristicas += "Sus caracteristicas son : " + this.name[i] + ", " + this.location + ", " 
    //     }
    // }
    MobileLibrary.prototype.printLibrary = function () {
        var precio = "";
        for (var i = 0; i < this.mobiles.length; i++) {
            precio += "Estos son todos los moviles: " + "\n" + this.mobiles[i] + "\n" +
                "Precio total : " + this.totalPriceCalculation();
        }
        console.log(precio);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
