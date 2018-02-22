-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Vært: localhost:3306
-- Genereringstid: 22. 02 2018 kl. 14:02:49
-- Serverversion: 5.7.21-0ubuntu0.17.10.1
-- PHP-version: 5.6.33-3+ubuntu17.10.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frisor`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `brugere`
--

CREATE TABLE `brugere` (
  `id` int(5) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mob_no` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `brugere`
--

INSERT INTO `brugere` (`id`, `first_name`, `last_name`, `mob_no`, `user_name`, `password`) VALUES
(4, 'test', 'test', 12345678, 'test', 'test'),
(6, 'Frank', 'Goldmann', 12345678, 'frank', 'frank'),
(7, 'Ady', 'Moussa', 23456789, 'ady', 'ady'),
(14, 'Hannah', 'Hansen', 12435687, 'hannah', 'hannah');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `produkter`
--

CREATE TABLE `produkter` (
  `id` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL,
  `pris` int(11) NOT NULL,
  `varenummer` int(11) NOT NULL,
  `beskrivelse` text NOT NULL,
  `billede` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `produkter`
--

INSERT INTO `produkter` (`id`, `navn`, `pris`, `varenummer`, `beskrivelse`, `billede`) VALUES
(6, 'Super Slime - Strong Hold', 199, 123, 'Strong hold er en hårvoks med stærk hold og mat look som er 100% vandopløselig.\r\nMed denne voks kan du forme din frisure og stole på den holder dagen lang. Hårvoksen er velegnet til kort hår og giver fylde, facon og masser af hold samt en dejlig duft af citron.\r\nHvis du ønsker at opnå et mere glansfuldt look brug voksen i let fugtigt hår.\r\nProduktet indeholder lanolin, hvilket er et helt naturligt fedtstof der både nærer og plejer dit hår, så det efterlades stærkt og sundt\r\n', 'Hairwax.jpg'),
(7, 'Super Slime - Medium Hold', 199, 124, 'Medium hold er en hårvoks til at forme hele frisuren eller fremhæve enkelte partier uden at tynge håret ned. Den giver masser af volumen, glans og modvirker udtørring af håret. Den har en cremet konsistens som ikke virker for tyk og er utrolig let at anvende i dit hår. Du får et meget naturligt look med voksen, da den hverken tilfører for meget shine eller stivhed.\r\nVoksen er hurtigtørrende med maksimal holdfaktor, hvilket vil sige den holder hele dagen og natten!\r\nMan skulle tro dens maksimale holdfaktor vil gøre den svær at arbejde med, men tværtimod er den utrolig nem og ligeså at vaske ud\r\n', 'Hairwax.jpg'),
(8, 'Super Slime - Gentle Hold', 199, 125, 'Gentle Hold har en konsistens, som er en let og fleksibel blanding, der bedst kan beskrives som en mellemting af stylingcreme og voks. Produktet tilfører håret et mildt og fleksibelt hold samtidig med at frisuren får tilført et glansfuldt look, som ligger tæt på grænsen til et smart wet look!\r\nDenne hårvoks kan bruges til alle hårtyper men er især god til kort hår. Produktet kan anvendes i tørt hår, og har et højt indhold af fibre, hvilket giver dit hår en masse tekstur\r\n\r\n', 'Hairwax.jpg');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `brugere`
--
ALTER TABLE `brugere`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `produkter`
--
ALTER TABLE `produkter`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `brugere`
--
ALTER TABLE `brugere`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Tilføj AUTO_INCREMENT i tabel `produkter`
--
ALTER TABLE `produkter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
