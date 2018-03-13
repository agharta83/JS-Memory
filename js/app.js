/* MODULE */
var app = {

  init: function() {
    console.log('Memory init');
    // Propriétés du module app
    app.$chess = $('#chess');
    app.$cards = $('.carte');

    app.createChess();
    app.showCurrentCard();
    app.cardMouseOver();

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
        // J'intercepte le mouseover sur la div que je viens d'ajouter au DOM
        $currentCard.on('mouseenter, mouseleave', app.cardMouseOver);
      }
    }
  },

  // Méthode pour afficher l'image à l'event du click sur le plateau
  showCurrentCard: function(event) {

    // Au click, masquer .cache et afficher .image
    if($(this).hasClass('cache')) {
      $(this).removeClass('cache');
      $(this).addClass('image');
    }
  },

  // Méthode pour appliquer un gris plus foncé sur la carte lors du passage de la souris // TODO fait lagger le navigateur ?!
  cardMouseOver: function(event) {
    console.log($(this));
    $(this).mouseenter(function(){
      $(this).addClass('grey');
    }),
    $(this).mouseleave(function(){
      $(this).removeClass('grey');
    })
  },
};

// quand le DOM est chargé, on appelle la méthode app.init();
$(app.init);
