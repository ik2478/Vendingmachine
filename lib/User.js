const VendingManager = require('./VendingMachine');

class User{

  constructor(){

    this._vendingManchine = new VendingManager();
  }
  
  checkPriceOf(productName){

    return this._vendingManchine.priceOf(productName);


  }

  coinAcceptor(coin){
    this._vendingManchine.insertCoin(coin);
  }

  selectProduct(productName){
    this._vendingManchine.selectProduct(productName);
  }

  get product(){
    return this._vendingManchine.productFunnel;
  }

  compartmentProduct(productName){
    this._vendingManchine.addproductToCompartment(productName)
  }

  get message(){
  return this._vendingManchine.nextMessage;
  }

  get remainderAmount(){
    return this._vendingManchine.totalAmount;
}
}

module.exports = User;