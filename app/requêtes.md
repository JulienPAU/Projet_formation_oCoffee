<!--
sudo -i -u postgres psql

CREATE USER coffee_u WITH PASSWORD 'coffee_p';

CREATE DATABASE coffee_d OWNER coffee_u;

Importer le fichier et exécuter le fichier dans la base de donnée fig_d (il faut d'abord quitter postgre)

psql -U coffee_u -d coffee_d -f ./DB/create_db.sql

ou sans quitter postgre

	\i (drag and drop sql file)

Pour se connecter à la BDD

	\c coffee_d coffee_u

Pour lister les tables

	\dt

Pour voir les utilisateurs crées

	\du

Pour quitter

	\q

-->
