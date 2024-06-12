# O'Coffee

Projet de Coffee Shop fictif

## Description

Il s'agit d'une application web full-stack pour un coffee shop fictif. Le projet a été construit à partir de zéro en utilisant HTML, CSS, JavaScript pour le front-end, et Node.js, Express.js, EJS (Embedded JavaScript) pour le back-end, y compris les routes et les vues. Le projet comprend également une base de données PostgreSQL pour stocker et gérer les données, avec des requêtes SQL pour interagir avec la base de données.

### Fonctionnalités

Une interface réactive et conviviale pour parcourir et acheter des produits de café.
Authentification et autorisation des utilisateurs à l'aide de express-session et dotenv.
Une base de données PostgreSQL pour stocker et gérer les données sur les produits de café, les catégories et les commandes.
Routage dynamique et vues à l'aide de Express.js et EJS.
Un bascule de mode sombre pour passer du thème clair au thème sombre.

### Technologies Utilisées

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- EJS
- PostgreSQL
- SQL

### Utilisation

Le projet comprend plusieurs contrôleurs pour gérer les requêtes et les réponses, y compris :

- mainController pour gérer la page d'accueil, le catalogue, la page à propos et la page de contact.
- catalogueController pour gérer les pages de produits de café individuels.
- basketController pour gérer la fonctionnalité de panier d'achat, y compris l'ajout et la suppression d'articles.
- Le projet comprend également un module dataMapper pour interagir avec la base de données PostgreSQL, y compris des fonctions pour :
  - Récupérer tous les produits de café, un nombre limité de produits de café ou une sélection aléatoire de produits de café. - Récupérer un seul produit de café par son ID, y compris sa catégorie associée.
  - Récupérer toutes les catégories ou un nombre limité de catégories.
  - Récupérer tous les produits de café associés à une catégorie particulière par son ID.

## Contribution

Les demandes de pull sont les bienvenues. Pour les modifications majeures, veuillez d'abord ouvrir une issue pour discuter de ce que vous souhaitez modifier.

## License

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
