DROP DATABASE IF EXISTS MLD5;

CREATE DATABASE IF NOT EXISTS MLD5;
USE MLD5;
# -----------------------------------------------------------------------------
#       TABLE : UTILISATEUR
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS UTILISATEUR
 (
   ID_USER CHAR(32) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRENOM CHAR(32) NULL  ,
   TELEPHONE CHAR(32) NULL  ,
   VILLE CHAR(32) NULL  ,
   DATE_INSCRIPTION CHAR(32) NULL  ,
   LON CHAR(32) NULL  ,
   LAT CHAR(32) NULL  ,
   ACTIVE CHAR(32) NULL  
   , PRIMARY KEY (ID_USER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : BOISSON
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS BOISSON
 (
   ID_BOISSON CHAR(32) NOT NULL  ,
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   NOM_BOISSON CHAR(32) NULL  ,
   PRIX CHAR(32) NULL  ,
   DATE_AJOUT CHAR(32) NULL  
   , PRIMARY KEY (ID_BOISSON) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE BOISSON
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_BOISSON_RESTAURANT
     ON BOISSON (ID_RESTAURANT ASC);

# -----------------------------------------------------------------------------
#       TABLE : COMMANDE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS COMMANDE
 (
   ID_COMMANDE CHAR(32) NOT NULL  ,
   ID_USER CHAR(32) NOT NULL  ,
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   ENVOYE CHAR(32) NULL  ,
   RECU CHAR(32) NULL  ,
   LU CHAR(32) NULL  ,
   REGLER CHAR(32) NULL  ,
   LIVRER CHAR(32) NULL  ,
   DATE_REGLEMENT CHAR(32) NULL  ,
   DATE_ENVOI CHAR(32) NULL  ,
   DATE_RECEPTION CHAR(32) NULL  ,
   DATE_LECTURE CHAR(32) NULL  
   , PRIMARY KEY (ID_COMMANDE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE COMMANDE
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_COMMANDE_UTILISATEUR
     ON COMMANDE (ID_USER ASC);

CREATE  INDEX I_FK_COMMANDE_RESTAURANT
     ON COMMANDE (ID_RESTAURANT ASC);

# -----------------------------------------------------------------------------
#       TABLE : RESTAURANT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS RESTAURANT
 (
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   ACTIVE CHAR(32) NULL  ,
   NOM_RESTAURANT CHAR(32) NULL  ,
   VILLE CHAR(32) NULL  ,
   TELEPHONE CHAR(32) NULL  ,
   EMAIL CHAR(32) NULL  ,
   LONGITUDE CHAR(32) NULL  ,
   LATITUDE CHAR(32) NULL  ,
   SITE_WEB CHAR(32) NULL  ,
   DATE_INSCRIPTION CHAR(32) NULL  ,
   ACCEPT_COMMANDE CHAR(32) NULL  ,
   ACCEPT_RESERVATION CHAR(32) NULL  ,
   ACCEPT_LIVRAISON CHAR(32) NULL  
   , PRIMARY KEY (ID_RESTAURANT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : AVIS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS AVIS
 (
   ID_AVIS CHAR(32) NOT NULL  ,
   ID_USER CHAR(32) NOT NULL  ,
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   MESSAGE CHAR(32) NULL  ,
   DATE_PUBLICATION CHAR(32) NULL  
   , PRIMARY KEY (ID_AVIS) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE AVIS
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_AVIS_UTILISATEUR
     ON AVIS (ID_USER ASC);

CREATE  INDEX I_FK_AVIS_RESTAURANT
     ON AVIS (ID_RESTAURANT ASC);

# -----------------------------------------------------------------------------
#       TABLE : LOCALISATION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS LOCALISATION
 (
   ID_LOCALISATION CHAR(32) NOT NULL  ,
   ID_USER CHAR(32) NOT NULL  ,
   LATITUDE CHAR(32) NULL  ,
   LONGITUDE CHAR(32) NULL  ,
   REFERENCE CHAR(32) NULL  
   , PRIMARY KEY (ID_LOCALISATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE LOCALISATION
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_LOCALISATION_UTILISATEUR
     ON LOCALISATION (ID_USER ASC);

# -----------------------------------------------------------------------------
#       TABLE : PLAT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS PLAT
 (
   ID_PLAT CHAR(32) NOT NULL  ,
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRIX CHAR(32) NULL  ,
   DATE_AJOUT CHAR(32) NULL  
   , PRIMARY KEY (ID_PLAT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE PLAT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_PLAT_RESTAURANT
     ON PLAT (ID_RESTAURANT ASC);

# -----------------------------------------------------------------------------
#       TABLE : LOCALISATION_RESTAURANT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS LOCALISATION_RESTAURANT
 (
   ID CHAR(32) NOT NULL  ,
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   LATITUDE CHAR(32) NULL  ,
   LONGITUDE CHAR(32) NULL  ,
   REFERENCE CHAR(32) NULL  
   , PRIMARY KEY (ID) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE LOCALISATION_RESTAURANT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_LOCALISATION_RESTAURANT_RESTAURANT
     ON LOCALISATION_RESTAURANT (ID_RESTAURANT ASC);

# -----------------------------------------------------------------------------
#       TABLE : MENU
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS MENU
 (
   ID_MENU CHAR(32) NOT NULL  ,
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   REFERENCE CHAR(32) NULL  ,
   DATE_AJOUT CHAR(32) NULL  
   , PRIMARY KEY (ID_MENU) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE MENU
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_MENU_RESTAURANT
     ON MENU (ID_RESTAURANT ASC);

# -----------------------------------------------------------------------------
#       TABLE : JOUR
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS JOUR
 (
   JOUR CHAR(32) NOT NULL  ,
   ID_MENU CHAR(32) NOT NULL  
   , PRIMARY KEY (JOUR) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE JOUR
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_JOUR_MENU
     ON JOUR (ID_MENU ASC);

# -----------------------------------------------------------------------------
#       TABLE : RESERVATION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS RESERVATION
 (
   ID_RESERVATION CHAR(32) NOT NULL  ,
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   ID_USER CHAR(32) NOT NULL  ,
   NOMBRE_PLACE CHAR(32) NULL  ,
   INFO_SUP CHAR(32) NULL  ,
   DATE_CONSOMMATION CHAR(32) NULL  ,
   ENVOYE CHAR(32) NULL  ,
   RECU CHAR(32) NULL  ,
   LU CHAR(32) NULL  ,
   GERER CHAR(32) NULL  ,
   DATE_ENVOI CHAR(32) NULL  ,
   DATE_RECEPTION CHAR(32) NULL  ,
   DATE_LECTURE CHAR(32) NULL  
   , PRIMARY KEY (ID_RESERVATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE RESERVATION
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_RESERVATION_RESTAURANT
     ON RESERVATION (ID_RESTAURANT ASC);

CREATE  INDEX I_FK_RESERVATION_UTILISATEUR
     ON RESERVATION (ID_USER ASC);

# -----------------------------------------------------------------------------
#       TABLE : MESSAGE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS MESSAGE
 (
   ID_RESTAURANT CHAR(32) NOT NULL  ,
   ID_USER CHAR(32) NOT NULL  ,
   ID_MESSAGE CHAR(32) NOT NULL  ,
   MESSAGE CHAR(32) NULL  ,
   ENVOYE CHAR(32) NULL  ,
   RECU CHAR(32) NULL  ,
   LU CHAR(32) NULL  ,
   DATE_ENVOI CHAR(32) NULL  ,
   DATE_RECEPTION CHAR(32) NULL  ,
   DATE_LECTURE CHAR(32) NULL  
   , PRIMARY KEY (ID_RESTAURANT,ID_USER,ID_MESSAGE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE MESSAGE
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_MESSAGE_RESTAURANT
     ON MESSAGE (ID_RESTAURANT ASC);

CREATE  INDEX I_FK_MESSAGE_UTILISATEUR
     ON MESSAGE (ID_USER ASC);

# -----------------------------------------------------------------------------
#       TABLE : S_ABONNER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS S_ABONNER
 (
   ID_USER CHAR(32) NOT NULL  ,
   ID_RESTAURANT CHAR(32) NOT NULL  
   , PRIMARY KEY (ID_USER,ID_RESTAURANT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE S_ABONNER
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_S_ABONNER_UTILISATEUR
     ON S_ABONNER (ID_USER ASC);

CREATE  INDEX I_FK_S_ABONNER_RESTAURANT
     ON S_ABONNER (ID_RESTAURANT ASC);

# -----------------------------------------------------------------------------
#       TABLE : CONSTITUER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CONSTITUER
 (
   ID_MENU CHAR(32) NOT NULL  ,
   ID_PLAT CHAR(32) NOT NULL  
   , PRIMARY KEY (ID_MENU,ID_PLAT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE CONSTITUER
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_CONSTITUER_MENU
     ON CONSTITUER (ID_MENU ASC);

CREATE  INDEX I_FK_CONSTITUER_PLAT
     ON CONSTITUER (ID_PLAT ASC);

# -----------------------------------------------------------------------------
#       TABLE : ETRE_ASSOCIE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ETRE_ASSOCIE
 (
   ID_COMMANDE CHAR(32) NOT NULL  ,
   ID_BOISSON CHAR(32) NOT NULL  
   , PRIMARY KEY (ID_COMMANDE,ID_BOISSON) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE ETRE_ASSOCIE
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_ETRE_ASSOCIE_COMMANDE
     ON ETRE_ASSOCIE (ID_COMMANDE ASC);

CREATE  INDEX I_FK_ETRE_ASSOCIE_BOISSON
     ON ETRE_ASSOCIE (ID_BOISSON ASC);

# -----------------------------------------------------------------------------
#       TABLE : COMPORTER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS COMPORTER
 (
   ID_COMMANDE CHAR(32) NOT NULL  ,
   ID_PLAT CHAR(32) NOT NULL  
   , PRIMARY KEY (ID_COMMANDE,ID_PLAT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE COMPORTER
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_COMPORTER_COMMANDE
     ON COMPORTER (ID_COMMANDE ASC);

CREATE  INDEX I_FK_COMPORTER_PLAT
     ON COMPORTER (ID_PLAT ASC);


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE BOISSON 
  ADD FOREIGN KEY FK_BOISSON_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE COMMANDE 
  ADD FOREIGN KEY FK_COMMANDE_UTILISATEUR (ID_USER)
      REFERENCES UTILISATEUR (ID_USER) ;


ALTER TABLE COMMANDE 
  ADD FOREIGN KEY FK_COMMANDE_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE AVIS 
  ADD FOREIGN KEY FK_AVIS_UTILISATEUR (ID_USER)
      REFERENCES UTILISATEUR (ID_USER) ;


ALTER TABLE AVIS 
  ADD FOREIGN KEY FK_AVIS_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE LOCALISATION 
  ADD FOREIGN KEY FK_LOCALISATION_UTILISATEUR (ID_USER)
      REFERENCES UTILISATEUR (ID_USER) ;


ALTER TABLE PLAT 
  ADD FOREIGN KEY FK_PLAT_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE LOCALISATION_RESTAURANT 
  ADD FOREIGN KEY FK_LOCALISATION_RESTAURANT_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE MENU 
  ADD FOREIGN KEY FK_MENU_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE JOUR 
  ADD FOREIGN KEY FK_JOUR_MENU (ID_MENU)
      REFERENCES MENU (ID_MENU) ;


ALTER TABLE RESERVATION 
  ADD FOREIGN KEY FK_RESERVATION_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE RESERVATION 
  ADD FOREIGN KEY FK_RESERVATION_UTILISATEUR (ID_USER)
      REFERENCES UTILISATEUR (ID_USER) ;


ALTER TABLE MESSAGE 
  ADD FOREIGN KEY FK_MESSAGE_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE MESSAGE 
  ADD FOREIGN KEY FK_MESSAGE_UTILISATEUR (ID_USER)
      REFERENCES UTILISATEUR (ID_USER) ;


ALTER TABLE S_ABONNER 
  ADD FOREIGN KEY FK_S_ABONNER_UTILISATEUR (ID_USER)
      REFERENCES UTILISATEUR (ID_USER) ;


ALTER TABLE S_ABONNER 
  ADD FOREIGN KEY FK_S_ABONNER_RESTAURANT (ID_RESTAURANT)
      REFERENCES RESTAURANT (ID_RESTAURANT) ;


ALTER TABLE CONSTITUER 
  ADD FOREIGN KEY FK_CONSTITUER_MENU (ID_MENU)
      REFERENCES MENU (ID_MENU) ;


ALTER TABLE CONSTITUER 
  ADD FOREIGN KEY FK_CONSTITUER_PLAT (ID_PLAT)
      REFERENCES PLAT (ID_PLAT) ;


ALTER TABLE ETRE_ASSOCIE 
  ADD FOREIGN KEY FK_ETRE_ASSOCIE_COMMANDE (ID_COMMANDE)
      REFERENCES COMMANDE (ID_COMMANDE) ;


ALTER TABLE ETRE_ASSOCIE 
  ADD FOREIGN KEY FK_ETRE_ASSOCIE_BOISSON (ID_BOISSON)
      REFERENCES BOISSON (ID_BOISSON) ;


ALTER TABLE COMPORTER 
  ADD FOREIGN KEY FK_COMPORTER_COMMANDE (ID_COMMANDE)
      REFERENCES COMMANDE (ID_COMMANDE) ;


ALTER TABLE COMPORTER 
  ADD FOREIGN KEY FK_COMPORTER_PLAT (ID_PLAT)
      REFERENCES PLAT (ID_PLAT) ;

