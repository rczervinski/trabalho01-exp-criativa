-- MySQL dump 10.13  Distrib 8.0.42, for macos15 (arm64)
--
-- Host: 127.0.0.1    Database: crud
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `anoNascimento` int(11) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `genero` varchar(15) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Ana Silva',1985,'Av. Paulista, 1000, São Paulo, SP','Feminino','123.456.789-00'),(2,'Carlos Oliveira',1992,'Rua da Consolação, 2000, São Paulo, SP','Masculino','234.567.890-11'),(3,'Maria Souza',1983,'Rua dos Três Irmãos, 150, Rio de Janeiro, RJ','Feminino','345.678.901-22'),(4,'Felipe Costa',1995,'Avenida Rio Branco, 300, Rio de Janeiro, RJ','Masculino','456.789.012-33'),(5,'Juliana Pereira',1990,'Rua das Palmeiras, 500, Belo Horizonte, MG','Feminino','567.890.123-44'),(6,'Ricardo Lima',1988,'Rua das Acácias, 700, Porto Alegre, RS','Masculino','678.901.234-55'),(7,'Beatriz Martins',1994,'Av. Afonso Pena, 800, Curitiba, PR','Feminino','789.012.345-66'),(8,'Fernando Ribeiro',1980,'Rua das Figueiras, 900, Salvador, BA','Masculino','890.123.456-77'),(9,'Paula Almeida',1989,'Rua do Catete, 1100, Recife, PE','Feminino','901.234.567-88'),(10,'Thiago Rocha',1991,'Av. Brasil, 1200, Fortaleza, CE','Masculino','012.345.678-99'),(11,'Sofia Rodrigues',1993,'Rua da Liberdade, 1300, Manaus, AM','Feminino','123.456.789-01'),(12,'Lucas Gomes',1996,'Rua das Oliveiras, 1400, Natal, RN','Masculino','234.567.890-12'),(13,'Mariana Ferreira',1987,'Avenida Sete de Setembro, 1500, Vitória, ES','Feminino','345.678.901-23'),(14,'Gustavo Silva',1998,'Rua 15 de Novembro, 1600, Florianópolis, SC','Masculino','456.789.012-34'),(15,'Fernanda Santos',1984,'Av. São João, 1700, Goiânia, GO','Feminino','567.890.123-45'),(16,'André Souza',1990,'Rua das Hortências, 1800, São Luís, MA','Masculino','678.901.234-56'),(17,'Larissa Oliveira',1992,'Avenida do Contorno, 1900, João Pessoa, PB','Feminino','789.012.345-67'),(18,'Ricardo Silva',1986,'Rua Santa Clara, 2000, Aracaju, SE','Masculino','890.123.456-78'),(19,'Camila Costa',1994,'Rua do Ouro, 2100, Maceió, AL','Feminino','901.234.567-89'),(20,'Rafael Pinto',1981,'Av. dos Andradas, 2200, Belém, PA','Masculino','012.345.678-00'),(21,'Patrícia Rocha',1988,'Rua da Praia, 2300, Cuiabá, MT','Feminino','123.456.789-12'),(22,'Marcos Pereira',1997,'Rua dos Tucanos, 2400, Campo Grande, MS','Masculino','234.567.890-23'),(23,'Vanessa Lima',1991,'Avenida Beira Mar, 2500, Campinas, SP','Feminino','345.678.901-34'),(24,'Felipe Costa',1994,'Rua do Sol, 2600, São Bernardo do Campo, SP','Masculino','456.789.012-45'),(25,'Isabela Martins',1989,'Rua São Francisco, 2700, São Caetano do Sul, SP','Feminino','567.890.123-56'),(26,'Rodrigo Alves',1993,'Rua dos Anjos, 2800, Diadema, SP','Masculino','678.901.234-67'),(27,'Giovana Ferreira',1984,'Rua do Horto, 2900, Guarulhos, SP','Feminino','789.012.345-78'),(28,'Renato Lima',1985,'Avenida Dom Pedro II, 3000, Osasco, SP','Masculino','890.123.456-89'),(29,'Rosa Costa',1992,'Rua Santa Rita, 3100, Santos, SP','Feminino','901.234.567-90'),(30,'Alexandre Rocha',1980,'Avenida Rebouças, 3200, Taboão da Serra, SP','Masculino','012.345.678-11'),(31,'Simone Almeida',1991,'Rua Vitória, 3300, Barueri, SP','Feminino','123.456.789-23'),(32,'Leandro Silva',1987,'Rua dos Jequitibás, 3400, Cotia, SP','Masculino','234.567.890-34'),(33,'Priscila Souza',1990,'Avenida Ibirapuera, 3500, Suzano, SP','Feminino','345.678.901-45'),(34,'Anderson Costa',1982,'Rua do Lago, 3600, Guarujá, SP','Masculino','456.789.012-56'),(35,'Luciana Pereira',1995,'Avenida dos Três Lagos, 3700, São Vicente, SP','Feminino','567.890.123-67'),(36,'Marcos Souza',1996,'Rua das Paineiras, 3800, Jundiaí, SP','Masculino','678.901.234-78'),(37,'Nathalia Martins',1993,'Av. do Estado, 3900, Itaquaquecetuba, SP','Feminino','789.012.345-89'),(38,'Otávio Lima',1989,'Rua 9 de Julho, 4000, Ribeirão Pires, SP','Masculino','890.123.456-90'),(39,'Larissa Santos',1992,'Rua Pio XI, 4100, Itapevi, SP','Feminino','901.234.567-01'),(40,'Carlos Pereira',1983,'Rua das Laranjeiras, 4200, Vargem Grande Paulista, SP','Masculino','012.345.678-22');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-25 10:57:15
