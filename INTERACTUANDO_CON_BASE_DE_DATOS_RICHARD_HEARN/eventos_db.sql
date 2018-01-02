-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2018 at 03:27 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventos_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `evento`
--

CREATE TABLE `evento` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `fecha_i` date NOT NULL,
  `fecha_f` date DEFAULT NULL,
  `hora_i` time DEFAULT NULL,
  `hora_f` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `correo` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `psw` varchar(45) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`correo`, `nombre`, `psw`, `fecha`) VALUES
('usuario1@gmail.com', 'mario gonzalez', '$2y$10$6xW69m6YdQc3CvO4YnOv0uJpMW6GazLFE0EOKc', '1995-07-11'),
('usuario2@gmail.com', 'Raul Jimenez', '$2y$10$W7RMd15yS/DjIa.y9ch.ue9GYtO2zSMWMKoCpv', '1990-03-11'),
('usuario3@gmail.com', 'Paris Hilton', '$2y$10$BbTuBU5Ud.yeCL.TNVNMMO0OZ6/OSkeinVuDUv', '1989-09-21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`correo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `evento`
--
ALTER TABLE `evento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
