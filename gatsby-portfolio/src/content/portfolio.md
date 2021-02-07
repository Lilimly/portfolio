---
title: "Portfolio"
date: "2021-01-10"
img: "./articles/header-portfolio.jpeg"
---

## Création de mon portfolio

### Ma mission

Créer mon portfolio.

### Les technologies utilisées

    - Gatsby
    - React JS
    - GraphQL
    - SASS
    - Git / GitHub

### Les étapes du projet

Pour créer ce projet, j'ai choisi d'utiliser le **générateur de site statique Gatsby**.

![Accueil portfolio](./img-portfolio/accueil-portfolio.jpeg)

#### Pourquoi un SSG ?

Les générateurs de sites statiques sont une **alternative** aux systèmes de gestion de contenu (CMS) basés sur des bases de données, tels que **WordPress** et **Drupal**.

Ils **réduisent la complexité** du site ce qui améliore la **vitesse**, la **fiabilité** et **facilite l'expérience des développeurs**.

**Grâce au SSG** :

- nous n'avons pas à nous soucier des **pics de trafic** qui font basculer la base de données.

- il n'est pas nécessaire de gérer le logiciel de serveur de base de données ou les sauvegardes.

- nous pouvons utiliser un logiciel de contrôle de version comme Git pour **gérer et suivre les modifications** apportées au contenu du site.

- parce que notre site est statique, nous pouvons même **renoncer complètement aux serveurs web et aux équilibreurs de charge**. Au lieu de cela, le site est hébergé avec un réseau de diffusion de contenu qui évolue en fonction du trafic.

![Section projets - Portfolio](./img-portfolio/projets-portfolio.jpeg)

#### Pourquoi Gatsby ?
Gatsby, ou GatsbyJS, est un générateur de site statique (c'est à dire de récupérer toutes les données une seule fois puis de les enregistrer, sans faire d'appels à un backend à chaque visite d'un utilisateur.) construit avec ReactJS et alimenté par GraphQL. 

Gatsby récupère des données pour votre site à partir de diverses sources, notamment des sites Web existants, des appels API et des fichiers via GraphQL, et construit le site statique en fonction des réglages de configuration que vous avez spécifiés.

Pourquoi Choisir Gatsby ?

Les deux principaux avantages d’un site web sont la sécurité et la vitesse : étant donné qu’il n’y a pas de base de données le site ne peut pas se faire hacker, et puisqu’il n’y a pas de génération de page à chaque requête, la navigation pour l’utilisateur est plus fluide.

Créer un site statique offre de nombreux avantages : une meilleure sécurité puisque les appels API ne sont pas publics, de meilleurs performances et enfin une grande facilité d'hébergement, moins coûteux et plus scalable.

Sites Web rapides : Étant donné que Gatsby utilise React, les pages générées ne sont jamais rechargées, ce qui rend le site extrêmement rapide.
 Le principal avantage de la construction d’un site statique avec Gatsby est la vitesse, que les webmasters ont essayé d’optimiser depuis l’annonce de Google d’utiliser la vitesse du site dans le classement de recherche web. Les temps de chargement affectent également les vues et les conversions des pages. On a estimé qu’un retard d’une seconde dans le temps de chargement du site peut entraîner une réduction de 7 % des conversions.

Sécurité : Vous obtenez également une sécurité supplémentaire avec un site statique. Comme c’est un tas de fichiers statiques qui sont servis, il n’y a pas grand-chose à pirater. De plus, vous pouvez toujours générer à nouveau les fichiers statiques s’ils sont perdus.

Coûts du serveur : L’hébergement d’un site dynamique nécessite que votre serveur soit compatible avec votre pile technologique. Si vous travaillez avec un site statique, vous pouvez l’héberger sur presque n’importe quel serveur, ce qui réduit aussi le coût associé à l’hébergement.

Générer le site statique avec Gatsby à chaque changement nécessite du JavaScript, ce qui peut aussi être fait sur une machine locale avant de transférer les fichiers statiques sur le site.

#### Pourquoi GraphQl ?

GraphQL est un langage de requêtes pour API ainsi qu’un environnement pour exécuter ces requêtes. Il est défini par une spécification indépendante des langages de programmation et des protocoles de transport, dans le but de s’inscrire comme un nouveau standard dans le développement d’API.

-GraphQL est en premier lieu un langage de requête. Le client choisit alors quels champs de chaque Objet (ex: orders) il souhaite et dans quel ordre.

-Dans un second temps, GraphQL est un environnement d’exécution qui interpréte et structure ces requêtes à partir du schéma. En effet, après avoir vérifié que la requête correspond bien à la syntaxe du langage, le serveur GraphQL vérifie que la requête est bien disponible dans Query (défini ci-dessous) et que les champs demandés correspondent bien au retour de la requête en question.

-GraphQL, après avoir validé la requête, recherche dans resolvers la fonction associée, lui transmet l’argument id, récupère les données et enfin réorganise celles-ci (uniquement les champs demandés dans l’ordre demandé) pour que la réponse corresponde à la requête.

GraphQL est un langage de requêtes de données pour API. QL, comme dans SQL, veut dire Query Language. GraphQL permet de manipuler de la donnée de façon simple, flexible et très précise. GraphQL n’est pas un langage de programmation ou un framework. GraphQL est une spécification pour implémenter ton API. Concrètement, dans l’utilisation, ça ressemble à ça.

Tu fais un seul POST et tu demandes exactement ce que tu veux via une requête GraphQL. Ensuite, c’est le serveur qui gère sa merde, toi tu reçois ton payload complet.

Avec GraphQL, tu ne t’adaptes pas un objet défini par le backend, tu définis dynamiquement l’objet que tu vas recevoir côté client.

GraphQL vient se placer comme un middleware entre les clients qui demande les données (terminaux mobiles, navigateurs web, …) et les possesseurs de ces données (services tiers, base de données, …). Il permet d'agréger ces données diverses et fourni une abstraction permettant de les requêter unitairement, très simplement et cela de manière sécurisé.

Cette fois-ci la requête est très déclarative et personnalisée, il n'y a pas d'excès d'ingrédient. Le client est pleinement satisfait et il n'y a pas de gaspillage. GraphQL définie un contrat entre les acteurs, une interface déclarative décrivant ce qu'il est possible de requêter et dans quelle mesure, là où REST est plus abstrait bien que certains standards tel que JSON API ont essayés de standardiser un peu le concept.

avantages:

-Une accélération du développement frontend en utilisant un paradigme déclaratif. Les développeurs se concentrent plus sur le quoi plutôt que sur le comment.
-Une réduction de l’« over et under fetching». Le réseau est allégé car seulement les données nécessaires à la requête transitent. Il n'y a pas besoin de faire plusieurs « rounds trips » pour obtenir les données nécessaires à l'affichage.
-Plus de prédictibilité. On sait à l'avance grâce au contrat d'interface ce qu'il est possible de requêter et de quels types de données vont être retournées.
-Plus d'éco-conception. Il n'y a pas d'excès de données et plusieurs requêtes peuvent être regroupées dans un seul appel HTTP par exemple, ce qui permet une réduction des charges réseaux.
-Un langage de requête qui est : protocole, langage de programmation, client agnostique. GraphQL tourne sur toutes les configurations et pour tous les cas d'usage.

### Pour consulter le projet

Pour ce projet, j'ai utilisé le **logiciel de versionning Git**.

Retrouvez le **code source** sur [mon espace GitHub](https://github.com/Lilimly/portfolio "Code source de mon portfolio")
