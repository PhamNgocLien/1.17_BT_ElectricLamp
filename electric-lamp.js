class ElectricLamp {
    constructor () {
        this.status = true;
    }

    turnOFF () {
        this.status = false;
        document.getElementById("color").style.backgroundColor = "black";
    }
    turnON () {
        this.status = true;
        document.getElementById("color").style.backgroundColor = "yellow";
    }
}