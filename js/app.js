(function() {
  var app = angular.module('gemStore', ['store-products']);
  
  app.controller('StoreController', function() {
    this.products = gems;
  });
  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  // Gem's Data
  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      canPurchase: true,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/azurite-1.gif",
        "images/azurite-2.gif",
        "images/azurite-3.gif"
      ],
      reviews: [{
        stars: 5,
        thumb: "images/thumbnails/thumb-1.jpg",
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        thumb: "images/thumbnails/thumb-2.jpg",
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
      canPurchase: true,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/bloodstone-1.gif",
        "images/bloodstone-2.gif",
        "images/bloodstone-3.gif"
      ],
      reviews: [{
        stars: 3,
        thumb: "images/thumbnails/thumb-3.jpg",
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        thumb: "images/thumbnails/thumb-4.jpg",
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
      canPurchase: true,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/zircon-1.gif",
        "images/zircon-2.gif",
        "images/zircon-3.gif"
      ],
      reviews: [{
        stars: 1,
        thumb: "images/thumbnails/thumb-5.jpg",
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        thumb: "images/thumbnails/thumb-6.jpg",
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        thumb: "images/thumbnails/thumb-7.jpg",
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }
  ];
})();
