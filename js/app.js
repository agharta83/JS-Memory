/* MODULE */
var app = {

  init: function() {
    console.log('Memory init');
    // Propriétés du module app
    app.$chess = $('#chess');
    app.$Card = $('.carte');

    app.createChess();
    app.showCurrentCard();
  },

    // Méthode pour créer le plateau
    createChess: function() {
    // Création de des cases :
    // Pour chaque ligne (4)
    for (var line = 0; line < 4; line++) {
      // - créer 7 cases, une pour chaque colonne
      for (var column = 0; column < 7; column++) {
        // Je créé la div .carte cache
        var $currentCard = $('<div class="carte cache">');
        // J'ajoute la div au DOM
        $currentCard.appendTo(app.$chess);
        // J'intercepte le click sur la div que je viens d'ajouter au DOM
        $currentCard.on('click', app.showCurrentCard);
      }
    }
  },

  // Méthode pour afficher l'image à l'event du click sur le plateau
  showCurrentCard: function(event) {
    console.log($(this));
    // Au click, masquer .cache et afficher .image
    if($(this).hasClass('cache')) {
      $(this).removeClass('cache');
      $(this).addClass('image');
    }
  },

};

// quand le DOM est chargé, on appelle la méthode app.init();
$(app.init);
