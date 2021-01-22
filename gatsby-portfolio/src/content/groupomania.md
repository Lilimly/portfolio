---
title: 'Groupomania'
date: '2020-10-01'
img: './articles/header-groupomania.png'
---

## Création d'un réseau social d’entreprise

### Ma mission
Développement fullstack du réseau social d'une entreprise.

### Les technologies utilisées
    - Coté front: JavaScript / React / Bootstrap
    - Coté Back : Node.JS / Express.JS
    - Base de données : mySQL / Sequelize

### Les étapes du projet
Le site se compose de :
* une page de connexion ou d'inscription
* une page d'accueil
* Des pages articles
* Des pages utilisateurs
* un compte administrateur

Pour accéder au réseau social, l'utilisateur devra créer un compte, ce qui l'enregistrera de manière sécurisé dans notre base de données mySQL (email et mot de passe cryptés).

Une fois authentifié, l'utilisateur accéde à la page d'accueil qui affiche l'ensemble des articles postés par, dans l'ordre du plus récent au plus ancien.

Chaque utilisateur a la possibilité de publier un nouvel article.

![Page d'accueil](./img-groupomania/accueil-groupomania.png)

En cliquant sur un article, l'utilisateur peut consulter son intégralité. Un utilisateur de pourra uniquement modifier ou supprimer un article qu'il aura créé.

Il pourra également y laisser un commentaire.

![Page article](./img-groupomania/article-groupomania.png)

L'application offre également la possibilité de consulter les comptes des utilisateurs affichant sa biographie, sa photo ainsi que les différents articles qu'il a créés.

Un utilisateur ne pourra uniquement modifier ou supprimer son propre compte. 

![Page utilisateur](./img-groupomania/user-groupomania.png)

Afin de modérer ce réseau social, un compte administrateur est défini. Il peut modifier ou supprimer des articles, commentaires et également des utilisateurs.

### Pour consulter le projet
Retrouvez le **code source** de ce projet sur [mon espace GitHub](https://github.com/Lilimly/groupomania "Code source du site Groupomania")