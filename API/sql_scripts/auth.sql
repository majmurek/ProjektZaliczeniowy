CREATE DATABASE  IF NOT EXISTS `shop`;
USE `shop`;

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`(
	`role_id` int(11) NOT NULL auto_increment,
	`role` varchar(255) default NULL,
	PRIMARY KEY (`role_id`)
)ENGINE=InnoDB auto_increment=2 default charset=utf8;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`(
	`id` int(11) NOT NULL auto_increment,
	`firstname` varchar(255) NOT NULL,
	`lastname` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`active` int(11) default NULL,
	PRIMARY KEY (`id`)
)ENGINE=InnoDB auto_increment=1 default charset=utf8;

DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
	`user_id` int(11) NOT NULL,
	`role_id` int(11) NOT NULL,
    PRIMARY KEY(`user_id`,`role_id`),
    KEY `user_role_key` (`role_id`),
    constraint `user_userrole` foreign key (`user_id`) references `user` (`id`),
    constraint `role_userrole` foreign key (`role_id`) references `role` (`role_id`)
)ENGINE=InnoDB default charset=utf8;

DROP TABLE IF EXISTS `persistent_logins`;
CREATE TABLE `persistent_logins` (
	`username` varchar(64) NOT NULL,
	`series` varchar(64) NOT NULL,
	`token` varchar(64) NOT NULL,
	`last_used` timestamp NOT NULL default current_timestamp on update current_timestamp,
    PRIMARY KEY(`series`)
)ENGINE=InnoDB default charset=utf8;

INSERT INTO `role` VALUES (1, 'ADMIN');
select * from shop.role

select * from shop.user

DROP TABLE IF EXISTS `catalog`;

CREATE TABLE `catalog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(600) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(600) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `catalog` VALUES 
	(1,'Lampa','Lampa wisząca FRANZ z mlecznym lub mleczno-różowym kloszem (do wyboru) to przepiękny model, którego unikatowy design harmonijnie łączy nowoczesne wzornictwo ze stylistyką orientalną i romantycznymi akcentami.',559,'https://img.shmbk.pl/rimgspr/63792748_pad_223_200_.jpg?scale=canvas','salon'),
	(2,'Stolik kawowy','Ten wyjątkowy komplet dwóch stolików kawowych to prawdziwa gratka dla miłośników funkcjonalności i stylu skandynawskiego. Dzięki nim zoptymalizujesz miejsce w pomieszczeniu – mniejszy stolik kawowy bez problemu można umieścić pod większym tak, by w razie wizyty gości wysunąć go i zaskoczyć ich niecodziennym designem.',1900,'https://img5.shmbk.pl/rimgspr/64266253_pad_253_200_dla-domu-do-salonu-meble-do-salonu-stoliki-i-lawy-do-salonu-zestaw-stolikow-kawowych-kodia-srednica-60-cm-i-80-cm-orzech-czarny.jpg?scale=canvas','salon'),
	(3,'Fotel','Podłokietniki o ergonomicznym kształcie i miękka, ognioodporna tapicerka z wysokiej jakości poliestru z pewnością przekonają każdego. Głównym elementem tego fotela jest synchroniczna regulacja oparcia i podnóżka, którą można aktywować poprzez zmianę nacisku ciała.', 1200,'https://img.shmbk.pl/rimgsph/161539_240dcd61-4b5f-495e-a702-a5fc670deebb_max_223_200_.jpg','salon'),
	(4,'Sofa','Oszczędna w miejsce i niezwykle elegancka sofa rozświetli każdy salon. Dzięki bogatym kolorom sprawi, że każdy pokój będzie bardziej przyjazny. Zwinnie i prosto dla każdego, to zalety rozkładanej sofy. Wygodne i dobrze wyściełane siedzisko i oparcie sofy, wykonane jest z najwyższej jakości materiału w kolorze morskim. Ten łatwy w pielęgnacji i wytrzymały materiał daje uczucie niezwykłego komfortu w kontakcie ze skórą. Rozsiądź się na tej wygodnej sofie z funkcją spania. Szczegóły: Kolor: Niebieski, Srebrny.',2290,'https://img.shmbk.pl/rimgsph/161539_0613f018-a0f0-49c1-9a5f-0121eb9f8de0_max_253_200_.jpg','salon'),
	(5,'Meble kuchenne','',20000,'https://img.shmbk.pl/rimgsph/161539_8305f062-e3ba-47fd-9567-def7587a5530_max_400_300_.jpg','kuchnia'),
	(6,'Naczynia','',59,'https://img.shmbk.pl/rimgsph/161539_afff21dd-cac3-4cb5-9433-f45d1a70bba5_max_400_300_.jpg','kuchnia'),
	(7,'Garnki i patelnie','',109,'https://img.shmbk.pl/rimgsph/161539_6f39ca63-5e06-494e-b3a9-284a1b9a21f5_max_400_300_.jpg','kuchnia'),
	(8,'AGD do zabudowy kuchni','',20000,'https://img.shmbk.pl/rimgsph/161539_37f9dc79-2c61-4eb4-a59f-09e7444ecdc4_max_400_300_.jpg','kuchnia'),
	(9,'Tekstylia','',109,'https://img.shmbk.pl/rimgsph/161539_b67de241-15bf-4ad3-b6c7-349a005cd747_max_399_300_.jpg','dodatki'),
	(10,'Dekoracje i akcesoria','',100,'https://img.shmbk.pl/rimgsph/161539_d6643c9b-ce81-4cd7-af43-0c762d56560c_max_400_300_.jpg','dodatki'),
	(11,'Zasłony','',500,'https://img.shmbk.pl/rimgsph/161539_10e840a2-7aae-45b1-a957-22f35754d6d7_max_400_300_.jpg','dodatki'),
	(12,'Obraz','',49,'https://img.shmbk.pl/rimgspr/61323568_pad_253_200_dla-domu-do-kuchni-i-jadalni-tekstylia-do-kuchni-scierki-kuchenne-scierka-kuchenna-bloomingville.jpg','dodatki'),
	(13,'Akcesoria łazienkowe','',39,'https://img.shmbk.pl/rimgsph/161539_86b426f4-a2e2-48d8-aae0-06886f8ff3bc_max_400_300_.jpg','łazienka'),
	(14,'Baterie łazienkowe','',100,'https://img.shmbk.pl/rimgspr/61323568_pad_253_200_dla-domu-do-kuchni-i-jadalni-tekstylia-do-kuchni-scierki-kuchenne-scierka-kuchenna-bloomingville.jpg','łazienka'),
	(15,'Meble łazienkowe','',1500,'https://img.shmbk.pl/rimgsph/161539_cc5a7850-c5fe-41bf-97e6-fa8a217d9059_max_410_300_.jpg','łazienka'),
	(16,'Sprzęt AGD do łazienki','',699,'https://img5.shmbk.pl/rimgspr/24555506_pad_253_200_dla-domu-do-lazienki-sprzet-agd-do-lazienki-pralki-samsung-wf60f4e5w2w-eo.jpg?scale=canva','łazienka'),
	(17,'Łóżko','',39,'https://img.shmbk.pl/rimgspr/58857418_pad_253_200_lozko-kontynentalne-roten-160x200-cm-czarne-dab-z-led.jpg?scale=canvas','sypialnia'),
	(18,'Komplet pościeli','',100,'https://img.shmbk.pl/rimgsph/161539_e1634fc5-7553-4b65-b7fe-afb83121eb30_max_253_200_.jpg','sypialnia'),
	(19,'Toaletki','',1500,'https://img.shmbk.pl/rimgspr/63760899_pad_253_200_.jpg?scale=canvas','sypialnia'),
	(20,'Szafy do sypialni','',699,'https://img.shmbk.pl/rimgspr/50083567_pad_253_200_szafa-stanley-biala-dab-beaufort-drewno.jpg?scale=canvas','sypialnia');
    
select * from shop.catalog
  
    
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`(
	`id` int(11) NOT NULL auto_increment,
	`firstname` varchar(255) DEFAULT NULL,
	`lastname` varchar(255) DEFAULT NULL,
	`email` varchar(255) DEFAULT NULL,
	`phone` varchar(255) DEFAULT NULL,
	`street` varchar(255) DEFAULT NULL,
	`city` varchar(255) DEFAULT NULL,
	`code` varchar(60) DEFAULT NULL,
	`nohome` int(11) DEFAULT NULL,
	`noflat` int(11) DEFAULT NULL,
	PRIMARY KEY (`id`)
)ENGINE=InnoDB auto_increment=1 default charset=utf8;

