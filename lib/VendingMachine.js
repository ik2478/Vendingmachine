const prices = {
  twixes: 0.75,
  sourpatch: 2.00,
  warheads: 0.50
}

class VendingMachine{

  constructor() {
    this._compartment = [];
    this._insertedAmount = 0.0;
    this._returnedCoins = [];
    this._productFunnel = [];
    this._specialMessages = [];

}


 addproductToCompartment(productName){
  const key = productName.toLowerCase();
  if(this._compartment.length < 10){
    if ( key in prices){
      this._compartment.push(key);
    }
    else {
      throw new Error(`Cannot add product: ${productName}`);
  }
  }

}

 productsInCompartment(){
    return this._compartment;
}

 priceOf(productName) {
  const key = productName.toLowerCase();
  if ( key in prices) {
      return prices[key];
  } else {
      throw new Error(`Unknown product: ' + ${productName}`);
  }
}

 setPriceOf(productName,newPrice){
    const key = productName.toLowerCase();
    if ( key in prices) {
         prices[key] = newPrice;
    }
    else{
        throw new Error(`Unknown product: ' + ${productName}`)
    }

}


get nextMessage() {
    return this._specialMessages.shift() || defaultMessage(this._insertedAmount);
}

insertCoin(coin) {
    const value = CoinType(coin.toLowerCase());
    if (value > 0) {
        this._insertedAmount += value;
    } else {
        this._returnedCoins.push(coin);
    }
}

selectProduct(name) {
    const price = this.priceOf(name);
    if (this._insertedAmount >= price) {
        this._insertedAmount -= price;
        this._productFunnel.push(this._compartment.pop());
        this._specialMessages.push('THANK YOU');
    } else {
        this._specialMessages.push(`Please add $${price - this._insertedAmount}`);
    }
}

get totalAmount(){
    return this._insertedAmount
}

get productFunnel() {
    return this._productFunnel;
}

get coinReturn() {
    return this._returnedCoins;
}

clearCoinReturn() {
    this._returnedCoins = [];
}

clearAmount() {
    return this._insertedAmount = 0.0;
}
}

function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

function defaultMessage(insertedAmount) {
  return insertedAmount ? formatCurrency(insertedAmount) : 'INSERT COIN';
}

function CoinType(coin) {
        //coin = coin.toLowerCase();
      if (coin === 'nickel') {
          return 0.05;
      } else if (coin === 'dime') {
          return 0.10;
      } else if (coin === 'quarter') {
          return 0.25;
      }  else if (coin === 'penny') {
          return 0.01;  
      } else {
          return 0.0;
      }
  
}


module.exports = VendingMachine;


