-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-09-2020 a las 22:36:18
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_datosusuarios`
--

CREATE TABLE `tb_datosusuarios` (
  `id` int(20) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido_paterno` varchar(40) NOT NULL,
  `apellido_materno` varchar(40) NOT NULL,
  `edad` varchar(5) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `imagen` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_datosusuarios`
--

INSERT INTO `tb_datosusuarios` (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `edad`, `sexo`, `imagen`) VALUES
(51, 'Zoe', 'Alonso', 'Hernandez', '14', 'Femenino', 'imagenes_usuarios/ayah_bdeir.jpg'),
(54, 'Jack', 'Alonso', 'Hernandez', '12', 'Masculino', 'imagenes_usuarios/drewboyd.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_datosusuarios`
--
ALTER TABLE `tb_datosusuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_datosusuarios`
--
ALTER TABLE `tb_datosusuarios`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
