-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: expenses
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` text,
  `email` text,
  `password` text NOT NULL,
  `reg_timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rokas Sirvelis','rokas@gmail.com','$2b$10$re70XLIwdXOhh8wDsAVNSedD5s5wENDcTkjCchd7litOKvM7/r2lS','2022-07-13 17:22:30'),(2,'Rokas Sirokas','rokas1@gmail.com','$2b$10$hA1xV3isrwHHBrcscW0LvuOEfo/0ZBr7raNfL/E25KTwa3IHpeheu','2022-07-13 17:55:07'),(3,'Rokas Rokas','rokas2@gmail.com','$2b$10$2ne68DymNeDArkhmAuRBOelVnLzbIR5uR7gmF250f3O5VrKESyrD6','2022-07-13 17:56:01'),(4,'Rokas Testas','rokas@gmail.com','$2b$10$UV5yxOd/8gKE6fpTg0w6OO6fDUn6d8TBIKxjVGUM4ZhAZiGPihcyy','2022-07-14 19:40:31'),(5,'Rokas Kitas','rokasss@gmail.com','$2b$10$52GUysI7HZbfXu78YnMg1OS12OrZ3fnWi11Ukts9Gjot6HYvdZ1DW','2022-07-14 20:15:55'),(6,'Rokas 2','rokas2@gmail.com','$2b$10$i8fRUxRsKA6DPRITFkUcEutVmun4FQw0sLcj3hkQdFghX3Di4yZLa','2022-07-18 12:51:25'),(7,'Rokas 3','rokas3@gmail.com','$2b$10$VwTbQF0R2J5caRfAklrql.GhQ9sz/uHEzF2RLwsiQ0hoImZ8OZE5G','2022-07-18 12:54:45'),(8,'Rokas 4','rokas4@gmail.com','$2b$10$enfcObco8GkJCQMw8SB8Eumxg9JgXBlEfo.1Z2/x6mzpHUNoSOGFO','2022-07-18 13:25:59'),(9,'Rokas 5','rokas5@gmail.com','$2b$10$/UXEouT4TkOuluI6oha1nusckXO85r1G1PY/79QwdMHlqAr1m2m0S','2022-07-18 13:33:54'),(10,'Rokas 6','rokas6@gmail.com','$2b$10$DlNg6agelSKxy3f96K62PuqRxn695mXazT1nJ3aAXNaxTNbOBZqzC','2022-07-18 13:35:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-18 17:16:18
