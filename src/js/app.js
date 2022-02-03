/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-console */
// TODO: write your code here
import sum from './basic';
import Game, { GameSavingsData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

console.log('worked');

console.log(sum([1, 2]));

const game = new Game();
game.start();
