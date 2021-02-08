---
title: "Piquante"
date: "2020-08-10"
img: "./articles/header-piquante.jpeg"
---

## Construction d'une API sécurisée

### Ma mission

Développer le backend d'une application d'avis gastronomique.

### Les technologies utilisées

    - Serveur : 
    Node.JS / Express.JS
    
    - Base de données : 
    MongoDB / Mongoose / MongoDB Atlas

### Le projet

Pour ce projet, j'ai créé le **backend** d'un site de notation de sauces.

Pour celà j'ai créé une **API REST** (Representational State Transfer).

#### Composition du site

- une page de connexion ou d'inscription
- une page d'accueil
- une page descriptive pour chaque sauce à noter
- 1 page création de sauce

#### Page d'inscription / de connexion

Dans un premier temps, l'utilisateur arrive sur une page d'inscription ou de connexion sécurisée : son email et son mot de passe sont enregistrés de façon **cryptés** dans la base de données **Mongo DB**.

#### La page d'accueil

Une fois authentiflié, l'utilisateur est dirigé sur la page d'accueil qui présente les différentes sauces créées par les utilisateurs.

![Page d'accueil](./img-piquante/accueil-piquante.jpeg)

#### les pages produits

Une page produit affiche les informations précises de la sauce. 

L'application offre la possibilité d'ajouter un "like" ou un "dislike" à la sauce.

![Page produit](./img-piquante/produit-piquante.jpeg)

#### Page d'ajout de sauce

L'utilisateur peut également créer une nouvelle sauce. Pour plus de sécurité, il ne pourra supprimer ou modifier que les sauces qu'il a lui-même créé.

![Page création d'une sauce](./img-piquante/post-piquante.jpeg)

### Consulter le projets

Pour ce projet, j'ai utilisé le **logiciel de versionning Git**.

Retrouvez le **code source** sur [mon espace GitHub](https://github.com/Lilimly/piquante "Code source du site Piquante")
