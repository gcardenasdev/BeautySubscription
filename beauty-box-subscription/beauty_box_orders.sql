-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: beauty_box
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_num` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` char(82) NOT NULL,
  `country` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zipcode` varchar(45) NOT NULL,
  `sub_type` varchar(45) NOT NULL,
  `total` double NOT NULL,
  PRIMARY KEY (`order_num`)
) ENGINE=InnoDB AUTO_INCREMENT=1023 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'newemail3@gmail.com','$2b$10$x92CUtbUiS02vdF3VAhY4uv9QAjrXT5Cdnm/Ypv.iXJaZh88XnIsG','United States','Florida','34744','Annual',360),(2,'newemail4@gmail.com','$2b$10$.alAXVqpw92sP/2.LuY9cuYroBaCvnzIWtIL7vv1GJanjMBRdql5u','United States','Florida','34744','Annual',360),(1000,'newemail5@gmail.com','$2b$10$USQ7IZyqius1RYR5NE7MBeaiCziJEkfbgq292JJ/Eih0PEwPk7me.','United States','Florida','34744','Quarterly',140),(1001,'newemail6@gmail.com','$2b$10$qOdx27DtDdv3ancoCKWw8ODWArhH4tsTPBD3EEax6plaZ9FE39hzy','United States','Florida','34744','Monthly',39.99),(1002,'email7@gmail.com','$2b$10$oork0REqLJP0ttnqSN9cJOWm3tQi21NV2hADptg25Jul.dFYrLe96','United States','AZ','12345','Quarterly',140),(1003,'email7@gmail.com','$2b$10$Fr0xD.BfaMhytO74gyaLveCatNRBMmisl02pkAgIzK5akWly1U0J.','United States','FL','12345','Quarterly',140),(1004,'newemail8@gmail.com','$2b$10$aCjVLdenbJAV/dZJ5DmbI.rWieffuLXM/UqkiP9TO54WUsQU9k5ha','United States','Florida','34744','Annual',360),(1005,'newemail9@gmail.com','$2b$10$oW/yYVx1mRODEU1KFPyhFu3it9HGfUZH9zrFyIxKrabUbl3sRmzQy','United States','Florida','34744','Annual',360),(1006,'newemail9@gmail.com','$2b$10$yZQHohGPZ.4iyIzTn6TOxOozO9vMFifHc8EncB0N6CUAzqskqIM7q','United States','Florida','34744','Monthly',39.99),(1007,'email7@gmail.com','$2b$10$cxtc9IqgFGmsew3HQOOzf.JsHXQ.j2eSrz3jw5ECddyolLlWb3X3K','United States','FL','12345','Monthly',39.99),(1008,'newemail9@gmail.com','$2b$10$cTsfRIr0LXfJGs3urh/fR.8I5hP5rkEYhpEu6q3XaSXfE/xZD/oE6','United States','Florida','34744','Monthly',39.99),(1009,'newemail10@gmail.com','$2b$10$AZy0hLbNKBFAwSylw9UqludSu/SuFcjlunu43ILBVcrV1oWTYdc5S','United States','Florida','34744','Quarterly',140),(1010,'newemail10@gmail.com','$2b$10$yYpEw3k0vJDgsdpjinHS4Ocgc8Gnl7biaoPihjTeHVr3UI76Bq3mG','United States','Florida','34744','Quarterly',140),(1011,'newemail11@gmail.com','$2b$10$zXXshBE5eLwe/o4IS7lH7O8RxQFq145dR0yLv4xbCyAy9TVIhW2US','United States','Florida','34744','Annual',360),(1012,'newemail12@gmail.com','$2b$10$7ONx4GRQFBE8DEjuoS0eOej8AgOzf.shqRnJGWNm9Qc8GFppsRRwS','United States','Florida','34744','Quarterly',140),(1013,'Iamanemail@email.com','$2b$10$9IdNoeVEkgvHY8MZREw3zOC1xU1Z6aJQeBETucwWxf.ruWOKtG4ym','United States','Florida','34744','Quarterly',140),(1014,'demoemail@gmail.com','$2b$10$IT0w702EbxJLFx82ZP8hZ.1NEtFJ6gzrbXqav2yceNUMeg2iWxOAW','USA','FL','34744','Annual',360),(1015,'newemail123@gmail.com','$2b$10$hsdhmYg/Wdf4atys3LNyNufv2GRU.7lY8SjCvDomJA6mq76Qa1tuu','USA','AZ','12345','Annual',360),(1016,'Iamnewemail123@gmail.com','$2b$10$pI2ioCk7mTLgYJ1/7KlTU.g/zPdzWg3RzbQv9UPUIdgXQeK.G6Li.','USA','Fl','34744','Monthly',39.99),(1017,'email@gmail.com','$2b$10$XIAFB3WTokmiiJz5UcNSfuaCcuUy7Gmp1fWU1XSCsR.XEBKqyMn6u','USA','Fl','34744','Quarterly',119),(1018,'Gaby@gmail.com','$2b$10$G0dO1/KtUhjOr86RgsiW5uZlDOke0dLn9GMK2LW/cAQUpWpnNSzzO','USA','FL','34744','Annual',360),(1019,'Gaby123@gmail.com','$2b$10$3C/6FMSxk/cE8CbG26nkWuK4jjb9eJZCbcR9pde6YOIIJuCFBx0h.','USA','FL','34744','Annual',306),(1020,'Gaby124@gmail.com','$2b$10$mQtd5M4qZaInoa2pYMVT6uuoIcYfKygdk7nkdFTN4T9O5EvcAD24O','United States','FL','34769','Quarterly',140),(1021,'Gaby125@gmail.com','$2b$10$25F79WxWP5Dm9ZhFS5tBJelD0Rj6aqrqTe8LJL4JQlGZFLDZ91MCC','United States','Florida','34768','Annual',360),(1022,'Gaby126@gmail.com','$2b$10$D64Ga.faRd7JFQEJgtFmn.bp3uOeUH6uHsfV9jYU9kKEmbxlijjbS','United States','Florida','34744','Monthly',39.99);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-02 11:42:12
