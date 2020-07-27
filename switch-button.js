class SwitchButton {
    constructor() {
        this.status = true;
        this.lamp = '';
    }

    connectToLamp (ElectricLamp) {
        this.lamp = ElectricLamp;
    }
    switchOFF () {
        this.lamp.turnOFF();
    }
    switchON () {
        this.lamp.turnON();
    }
}