import picpay from '../lib';

describe('PicPac Library', () => {
  describe('smokes tests', () => {
    it('should exist the connect method', () => {
      expect(picpay.connect).toBeInstanceOf(Function);
    });
  });
});
