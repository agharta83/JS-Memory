/* MODULE */
var app = {

  init: function() {
    console.log('Memory init');
    // Propriétés du module app
    app.$chess = $('#chess');
    app.$cards = $('.carte');
    app.$cardImage = $('.image');

    app.createChess();
    app.showCurrentCard();
    app.cardMouseOver();
    app.generatePosition();
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
        $currentCard.on('mouseover, mouseout', app.cardMouseOver);
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
    // Lorsque la souris entre dans la div, ajoute la classe grey définit en css
    $(this).mouseover(function(){
      $(this).addClass('grey');
    }),
    // Lorsque la souris sort de la div enleve la classe grey
    $(this).mouseout(function(){
      $(this).removeClass('grey');
    })
  },

  generatePosition: function () {
    // Je créé le tableau qui va contenir mes valeurs de background-position
    // L'axe x est toujours 0, l'axe y diminue de -100px a chaque image
    // Initialisation des variables que je vais utiliser dans le tableau
    var $top = 0;
    var $arrayLength = 18;
    var $cardImgPos = new Array();

    for (var i = 0; i < $arrayLength; i++) {
      $cardImgPos[i] = [$top];
      // je soustrait 100 de la variable top
      $top -= 100;
    }
    console.log($cardImgPos[0]);
    // J'ajoute un background et un background-position a ma div
    // TODO ne fonctionne pas
    $('.image').css({
      'background-image': "url('../images/cards.png')",
      'background-position': '0 -100px'
    });
  },



};
// quand le DOM est chargé, on appelle la méthode app.init();
$(app.init);
