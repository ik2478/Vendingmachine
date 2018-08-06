const Admin = require('../lib/Admin');
const VendingMachine = require('../lib/VendingMachine');
const { PENNY,NICKEL, DIME, QUARTER } = require('./coins');
const  PRODUCTS = require('./products');

describe('The admin', () => {

  let ad;
  beforeEach(() => {
      ad = new VendingMachine();
      ad1 = new VendingMachine();
      ad2 = new VendingMachine();
      
  });

  

   describe('admin auth', () => {

    beforeEach(() => {
      ad.addproductToCompartment(PRODUCTS.twixes);
      ad.addproductToCompartment(PRODUCTS.twixes);
      ad.addproductToCompartment(PRODUCTS.twixes);
      ad.addproductToCompartment(PRODUCTS.twixes);
      ad.addproductToCompartment(PRODUCTS.twixes);
      ad.addproductToCompartment(PRODUCTS.twixes);
      
    });
        
       it('set new price of product', () => {
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            expect(ad.totalAmount).toBe(5);
            expect(ad.clearAmount()).toBe(0.0);
            ad.setPriceOf(PRODUCTS.twixes,0.85);
            ad.setPriceOf(PRODUCTS.warheads,0.60);
            ad.setPriceOf(PRODUCTS.sourpatch,2.10);

            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(DIME.value);

            ad.selectProduct(PRODUCTS.twixes);

            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(DIME.value);

            ad.selectProduct(PRODUCTS.twixes);

            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(QUARTER.value);
            ad.insertCoin(DIME.value);

            ad.selectProduct(PRODUCTS.twixes);

        
        
        
       });

      it('total count of money', () => {
        const vMachine = new VendingMachine();
        vMachine.insertCoin(PENNY.value);
        vMachine.insertCoin(QUARTER.value);
        vMachine.insertCoin(DIME.value);
        vMachine.insertCoin(NICKEL.value);
        expect(vMachine.totalAmount).toEqual(0.41); 
        
        
       });

  
    });


  });