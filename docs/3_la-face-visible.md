# La face visible

La carte retournée doit afficher une image. 🎨

![setup](images/fruit.png)

## Notions à utiliser

### CSS

- [Découper une image de type "sprites" en CSS](https://www.alsacreations.com/tuto/lire/1068-sprites-css-background-position.html) [#](https://github.com/O-clock-Galaxy/correction-evaluation-js-memory/blob/master/js/app.js#L125)

### JavaScript

- [Mélanger un tableau](https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array) [#](https://github.com/O-clock-Galaxy/correction-evaluation-js-memory/blob/master/js/app.js#L299)
- [Modifier le style d'un élément DOM avec jQuery](http://api.jquery.com/css/) [#](https://github.com/O-clock-Galaxy/correction-evaluation-js-memory/blob/master/js/app.js#L125)

## Instructions

### La pomme

Il faut ajouter en fond des `.image` le fichier `cards.png`.

### Les fruits

Pour afficher une image différente, on rajoute sur chaque `.image` un `background-position` (technique du « sprite »).
Exemple : `background-position: 0 -100px`

Il y a 28 cartes, soit 14 paires. Il faut donc donner 14 `background-position` différents, lorsque l'on génère les cartes.

### On mélange

Enfin, les cartes doivent être mélangées avant d'être ajoutées au plateau.  
Si on les stocke dans un array avant de les rajouter au plateau, il suffit de mélanger ce tableau ! :smiley:

--

La suite : [Une paire](4_une-paire.md)
