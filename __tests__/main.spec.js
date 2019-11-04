import fetch from 'node-fetch';
import picpay from '../lib';

global.fetch = fetch;

describe('PicPac Library', () => {
  describe('smokes tests', () => {
    it('should exist the connect method', () => {
      expect(picpay.connect).toBeInstanceOf(Function);
    });
    it('should a error when token not exist', (done) => {
      picpay.connect().catch((error) => {
        expect(error.message).toEqual('You must supply a valid API key');
        done();
      });
    });
    it('should exist the object of transaction', (done) => {
      picpay.connect('token').then((client) => {
        expect(client.transaction).toBeInstanceOf(Object);
        done();
      });
    });
    it('should have the method to create the transaction', (done) => {
      picpay.connect('token').then((client) => {
        expect(client.transaction.create).toBeInstanceOf(Function);
        done();
      });
    });
    it('should have the method to cancel transaction', (done) => {
      picpay.connect('token').then((client) => {
        expect(client.transaction.refund).toBeInstanceOf(Function);
        done();
      });
    });
    it('should have the method to view transaction status', (done) => {
      picpay.connect('token').then((client) => {
        expect(client.transaction.status).toBeInstanceOf(Function);
        done();
      });
    });
  });
});
