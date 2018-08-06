const User = require('../lib/User');
const VendingMachine = require('../lib/VendingMachine');
const { PENNY,NICKEL, DIME, QUARTER } = require('./coins');
const  PRODUCTS = require('./products');

describe('The user', () => {

  let user;
  beforeEach(() => {
      user = new User();
      user2 = new User();
      user3 = new User();
  });

  it('can check the price of a product', () => {
      
      
      
      expect(user.checkPriceOf(PRODUCTS.sourpatch)).toEqual(2.00);
      expect(user.checkPriceOf(PRODUCTS.twixes)).toEqual(0.75);
      expect(user.checkPriceOf(PRODUCTS.warheads)).toEqual(0.50);
      
  });

    describe('Vending machine loaded with different products', () => {

      beforeEach(() => {
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user.compartmentProduct(PRODUCTS.sourpatch);
        user2.compartmentProduct(PRODUCTS.twixes);
        user2.compartmentProduct(PRODUCTS.twixes);
        user2.compartmentProduct(PRODUCTS.twixes);
        user2.compartmentProduct(PRODUCTS.twixes);
        user2.compartmentProduct(PRODUCTS.twixes);
        user3.compartmentProduct(PRODUCTS.warheads);
        user3.compartmentProduct(PRODUCTS.warheads);
        user3.compartmentProduct(PRODUCTS.warheads);
        
    });
        
        it('.User deposits $.75 and buys twixes and machine dispenses change', () => {
           
           user2.coinAcceptor(QUARTER.value);
           user2.coinAcceptor(QUARTER.value);
           user2.coinAcceptor(QUARTER.value);
           user2.coinAcceptor(QUARTER.value);
           user2.selectProduct(PRODUCTS.twixes);
           expect(user2.product).toContain('twixes');
           user2.message
          expect(user2.remainderAmount).toBe(0.25);
        
        
        });

        it('.User deposits $.75 and buys twixes', () => {
           
          user.coinAcceptor(DIME.value);
          user.coinAcceptor(DIME.value);
          user.coinAcceptor(DIME.value);
          user.coinAcceptor(DIME.value);
          user.coinAcceptor(DIME.value);
          
           user.selectProduct(PRODUCTS.sourpatch);
           expect(user.message).toBe('Please add $1.5');
       
       });


         })   
    
    
     
  });