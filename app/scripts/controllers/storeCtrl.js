'use strict';

/**
 * @ngdoc function
 * @name tutorialAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialAngularApp
 */


var app = angular.module('exampleController', [])
 
  app.controller('StoreCtrl', function () {
  	var vm = this;
  	vm.products = gems;
  });


  app.controller('TabController',function(){
 		var vm = this;
 		vm.tab = 1;
 		vm.setTab = function(selectTab){
 			vm.tab = selectTab; 
 		};
 		vm.isSet = function(tabName){
 			return vm.tab === tabName;
 		};
 	});

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  app.controller('ReviewController', function(){
     this.review = {};
     this.addReview = function(product){
      this.review = {createdOn : Date.now()};
       product.reviews.push(this.review);
       this.review = {};
     };
  });

var gems = [
      {
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        canPurchase: true,
        soldOut: false,
        faces: 14,
        images: [
          "../images/angularjs.png"
        ],
        reviews: [{
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        canPurchase: true,
        soldOut: false,
        faces: 12,
        images: [
          "../images/angularjs.png"
        ],
        reviews: [{
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@example.org",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@example.org",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        canPurchase: true,
        soldOut: false,
        faces: 6,
        images: [
          "../images/angularjs.png"
        ],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org",
          createdOn: 1397490980837
        }]
      }
    ];