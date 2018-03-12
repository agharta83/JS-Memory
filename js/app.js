/* MODULE */
var app = {

  init: function() {
    console.log('Memory init');
    // Propriétés du module app
    app.$chess = $('#chess');
    app.$cardArr = new Array();
    app.$card = $('.carte');
    app.$cache = $('.cache');
    app.$image = $('.image');

    app.createChess();
  },

    // Méthode pour créer le plateau
    createChess: function() {
    // Création de des cases :
    // Pour chaque ligne (4)
    for(var line = 0; line < 4; line++) {
      // - créer 7 cases, une pour chaque colonne
      for(var column = 0; column < 7; column++) {
        // Je créé les div
        app.$cardArr = $('<div class="carte cache"><div class="image">');
        // Je les ajoute au DOM
        app.$cardArr.appendTo(app.$chess);





      }
    }
  },

};

// quand le DOM est chargé, on appelle la méthode app.init();
$(app.init);
