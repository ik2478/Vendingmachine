const VendingManager = require('./VendingMachine');


class Admin{

  constructor(){

    this._vendingManchine = new VendingManager();
    
  }


  loadProductToCompartment(productName){

    this._vendingManchine.addproductToCompartment(productName);
  }


  get productInCompartment(){
    return this._vendingManchine.productsInCompartment();
  }

  setPriceOfProduct(productName,newPrice){
    this._vendingManchine.setPriceOf(productName,newPrice);

  }

   priceOf(productName) {
    return this._vendingManchine.priceOf(productName);  
  }

  get totalAmount(){
    return this._vendingManchine.totalAmount;
  }
  
}



module.exports = Admin;

