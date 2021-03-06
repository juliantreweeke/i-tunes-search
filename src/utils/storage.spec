import { sessionStore } from './storage';

describe('storage', () => {
  describe('sessionStore', () => {
    describe('getItem', () => {
      it('returns null if not supported', () => {
        Storage.prototype.setItem = null;
        const result = sessionStore.getItem('key');
        expect(result).toBe(null);
      });
      it('returns correct value if supported', () => {
        Storage.prototype.setItem = jest.fn();
        Storage.prototype.removeItem = jest.fn();
        Storage.prototype.getItem = jest.fn(() => 2);
        const result = sessionStore.getItem();
        expect(result).toBe(2);
      });
    });
    describe('removeItem', () => {
      it('returns null if not supported', () => {
        Storage.prototype.setItem = null;
        const result = sessionStore.removeItem();
        expect(result).toBe(null);
      });
      it('returns correct value if supported', () => {
        Storage.prototype.setItem = jest.fn();
        Storage.prototype.removeItem = jest.fn();
        const result = sessionStore.removeItem();
        expect(result).toBe(undefined);
      });
    });
    describe('setItem', () => {
      it('returns null if not supported', () => {
        Storage.prototype.setItem = null;
        const result = sessionStore.setItem(2);
        expect(result).toBe(null);
      });
      it('returns correct value if supported', () => {
        Storage.prototype.setItem = jest.fn(() => 2);
        Storage.prototype.removeItem = jest.fn();
        const result = sessionStore.setItem(2);
        expect(result).toBe(2);
      });
    });
  });
});
