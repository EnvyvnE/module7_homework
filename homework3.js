//first task

const getObject = (obj) => console.log(Object.getPrototypeOf(obj))

//second task

function getObject(string,object){
    console.log( string in object);
}

//third task
function createEmptyObj(){
    const emptyObj = Object.create(null);
}

//fourth task


function SmartHouse(brand, powerUsage){
    this.brand = brand,
    this.powerUsage = powerUsage
};

SmartHouse.prototype.isPoweredOn = function(isPoweredOn){
    if( typeof isPoweredOn == 'boolean'){
        this.isPoweredOn = isPoweredOn;
      isPoweredOn ? console.log('turned on') :console.log('turned off');
    } else {
       console.log('error type of argument')
    }
    
};

function Bulb(brand,price,type){
  this.brand = brand,
  this.price = price,
  this.type = type
};

Bulb.prototype = new SmartHouse();

Bulb.prototype.getEcoStatus = function(isEco){
  this.isEco = isEco;
}

function Laptop(price,type){
  this.price = price,
  this.type = type
};

Laptop.prototype = new SmartHouse();

Laptop.prototype.getWeight = function(weight){
  this.weight = weight;
}

const lux = new Bulb('lux','15', 'led');
lux.isPoweredOn(false)

const macbook = new Laptop('1099', 'air');

//fifth task

class SmartHouse{
    constructor(brand, powerUsage){
        this.brand = brand;
        this.powerUsage = powerUsage;
    }
    isPoweredOn(isPoweredOn){
        if( typeof isPoweredOn == 'boolean'){
            this.isPoweredOn = isPoweredOn;
          isPoweredOn ? console.log('turned on') :console.log('turned off');
        } else {
           console.log('error type of argument')
        }
        
    };
};

class Bulb extends SmartHouse {
    constructor(brand,price,type,powerUsage){
        super(brand);
        this.price = price;
        this.type = type;
        this.powerUsage = powerUsage;
    }
    etEcoStatus(isEco){
        this.isEco = isEco;
    }
};

class Laptop extends SmartHouse {
    constructor(price,type,brand,powerUsage){
        super(brand);
        this.price = price;
        this.type = type;
        this.powerUsage = powerUsage;
      };
      getWeight(weight){
        this.weight = weight;
      }
};

const lux = new Bulb('lux','15', 'led','178');
const macbook = new Laptop('1099', 'air','apple','255');
lux.isPoweredOn(false);
console.log(lux);
console.log(macbook);
