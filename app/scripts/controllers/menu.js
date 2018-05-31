'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
    this.items = [
      {
        id: '11',
        name: 'one',
        img: 'food01.jpg',
        rating: 3.1
      },
      {
        id: '22',
        name: 'two',
        img: 'food02.jpg',
        rating: 5.5
      },
      {
        id: '33',
        name: 'three',
        img: 'food03.jpg',
        rating: 6.6
      }
    ];

    this.increment = function (item) {
      item.rating = ((item.rating * 10) + 1) / 10;
    };  

    this.decrement = function (item) {
      item.rating = ((item.rating * 10) - 1) / 10;
    }; 
  });
