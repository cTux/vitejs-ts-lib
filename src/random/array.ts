import { getRandomBetween } from './getRandomBetween';

Array.prototype.random = function () {
  return this[getRandomBetween({ min: 0, max: this.length - 1 })];
};
