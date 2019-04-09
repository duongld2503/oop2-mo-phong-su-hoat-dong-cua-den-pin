function Battery() {
    this.setEnergy = function (energy) {
        this.energy = energy;
    }
    this.getEnergy = function () {
        return this.energy;
    }
    
    this.downEnergy = function () {
        if (this.energy > 0){
            this.energy--;
        }
    }
}

function FlashLamp() {
    this.setBattery = function (battery) {
        this.battery = battery;
    }
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    }
    this.light = function () {
        if (this.status){
            alert("light")
        } else alert("off")
    }
    this.turnOn = function () {
        this.status = true;
    }
    this.turnOff = function () {
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(10);

let flash = new FlashLamp();
flash.setBattery(battery);

// flash.light();
// flash.getBatteryInfo();

// flash.turnOn();
// flash.light();
//
flash.turnOff();
flash.light();