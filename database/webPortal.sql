CREATE DATABASE  IF NOT EXISTS `webportal` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webportal`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: webportal
-- ------------------------------------------------------
-- Server version	8.0.36

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
  `orderId` int NOT NULL,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `orderTotal` decimal(10,2) DEFAULT NULL,
  `paymentStatus` varchar(255) DEFAULT NULL,
  `trackingNumber` varchar(255) DEFAULT NULL,
  `shippingStatus` varchar(255) DEFAULT NULL,
  `shippingAddress` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`orderId`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,2,1,5,5.00,'Paid','11111111','Out for Delivery','111 Dead End Way, Jacksonville FL 32224'),(2,2,1,10,10.00,'Paid','11111112','Order Created','111 Dead End Way, Jacksonville FL 32224'),(3,1,1,50,50.00,'Paid','11111113','Order Created','122 Jump Street, Jacksonville FL 32224'),(4,2,1,15,15.00,'Not Paid','11111114','Pending Payment','111 Dead End Way, Jacksonville FL 32224');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productId` int NOT NULL AUTO_INCREMENT,
  `productDescription` varchar(1000) DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL,
  `onHandQuantity` int DEFAULT '0',
  `productName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Five bananas',1.00,100,'Bananas');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('5IorM1yusGfO5_xHLsLkQIyM6iFgKmKw',1727471530,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T21:12:09.563Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('A24iueFrphM_TAREkmSnFpQreVXwDhmm',1727470242,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T20:50:42.279Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('Ba6YtLDuHYpiFIslQsugAsc6OAmmMJv_',1727470242,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T20:01:33.146Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"userId\":2,\"name\":\"John Smith\"}'),('Btr4HfwjC8F73SD8MfRmN76XSE_JQMUB',1727470242,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T20:50:42.332Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('DrHvpXYoIfbtNXERtiJYJsR2umR4YphR',1727471530,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T21:12:09.568Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('IVt8B7l1q3JLz52RJlRbGBQyUaFlJeJa',1727470242,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T20:50:42.341Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('ONRDVqTouyXFM2--jI-0f9gO1vMuENt6',1727470210,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T20:50:09.975Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('Qe16ZZOhvsuzlkrwgq5BG8yPXb_wDsS0',1727470242,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T20:50:42.334Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('_SomG9nqzoVCAZNIyKxIWtPsOirbg3zU',1727471530,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T21:12:09.599Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('cHVNPF1gSvrCBZMKjNBVDXsubQg8ab9Z',1727471530,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T21:12:09.594Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}'),('u2ceXeYW0Xr6LxE05E6mHG54jRwZ5a3e',1727470242,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-09-27T20:50:42.347Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('user','pass','admin',1),('user2','pass2','John Smith',2);
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

-- Dump completed on 2024-09-27 16:57:35
