CREATE DATABASE  IF NOT EXISTS `courses_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `courses_db`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: courses_db
-- ------------------------------------------------------
-- Server version	9.0.0

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
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Test','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751820350443.png'),(2,'Test1','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751829806088.png'),(3,'TestSearch','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751820350443.png'),(4,'Test','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751820350443.png'),(5,'Test','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751820350443.png'),(6,'Test','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751820350443.png'),(7,'Test','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751820350443.png'),(8,'Test','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751820350443.png'),(9,'Test','Tincidunt non. In amet, placerat vel ex sit quis tincidunt odio Donec In ullamcorper vitae Praesent vitae ipsum quam lorem.','/images/course-1751820350443.png');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@test.com','1234');
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

-- Dump completed on 2025-07-06 23:41:45
