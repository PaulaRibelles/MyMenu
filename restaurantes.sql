-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-07-2020 a las 20:31:25
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurantes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carta`
--

CREATE TABLE `carta` (
  `id` int(11) NOT NULL,
  `restaurante` int(11) NOT NULL,
  `producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carta`
--

INSERT INTO `carta` (`id`, `restaurante`, `producto`) VALUES
(1, 0, 1),
(2, 0, 1),
(3, 0, 2),
(4, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `icono` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`id`, `nombre`, `icono`) VALUES
(0, 'Inglés', ''),
(1, 'Español', ''),
(2, 'Valenciano', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `restaurante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `url`, `restaurante`) VALUES
(1, 'https://cdn.pixabay.com/photo/2015/09/02/12/35/bar-918541__340.jpg', 0),
(2, 'https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408__340.jpg', 0),
(3, 'https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408__340.jpg', 0),
(4, 'https://cdn.pixabay.com/photo/2016/11/18/22/21/architecture-1837150__340.jpg', 0),
(5, 'https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656__340.jpg', 0),
(6, 'https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656__340.jpg', 1),
(7, 'https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397__340.jpg', 1),
(8, 'https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351__340.jpg', 1),
(9, 'https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397__340.jpg', 1),
(10, 'https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351__340.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(1000) NOT NULL,
  `precio` float NOT NULL,
  `ingredientes` varchar(1000) NOT NULL,
  `categoria` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `ingredientes`, `categoria`) VALUES
(1, 'Langosta', 15.05, 'Langosta hervida con especias', 'especialidades de la casa'),
(2, 'Patatas bravas', 4.95, 'Patatas fritas con salsa ', 'Entrantes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurantes`
--

CREATE TABLE `restaurantes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `ubicacion` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `restaurantes`
--

INSERT INTO `restaurantes` (`id`, `nombre`, `ubicacion`) VALUES
(0, 'Molino', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.9302746499064!2d-0.32833917074802915!3d39.47562903391004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI4JzMyLjMiTiAwwrAxOSc0MC4xIlc!5e0!3m2!1ses!2ses!4v1592842908116!5m2!1ses!2ses'),
(1, 'Cafetería Castillo', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49271.06757909459!2d-0.4043381403895641!3d39.48193921085968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8607121c55502513!2sCafeter%C3%ADa%20Castillo!5e0!3m2!1ses!2ses!4v1592843076612!5m2!1ses!2ses');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carta`
--
ALTER TABLE `carta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `restaurantes`
--
ALTER TABLE `restaurantes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carta`
--
ALTER TABLE `carta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
