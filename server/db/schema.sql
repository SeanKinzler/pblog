-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
-- 
-- ---
DROP TABLE IF EXISTS `Posts`;

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `googleId` VARCHAR(24) NOT NULL,
  `name` TINYTEXT NULL DEFAULT NULL,
  `email` TINYTEXT NULL DEFAULT NULL,
  `admin` BOOLEAN NULL DEFAULT false,
  PRIMARY KEY (`googleId`)
);

-- ---
-- Table 'Posts'
-- 
-- ---
    
CREATE TABLE `Posts` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `authorId` INTEGER NULL DEFAULT NULL,
  `author` MEDIUMTEXT NOT NULL,
  `slug` MEDIUMTEXT NULL DEFAULT NULL,
  `blurb` MEDIUMTEXT NULL DEFAULT NULL,
  `title` MEDIUMTEXT NULL DEFAULT NULL,
  `imgPath` MEDIUMTEXT NULL DEFAULT NULL,
  `creationDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `editDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Posts` ADD FOREIGN KEY (author) REFERENCES `Users` (googleId);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Posts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `User` (`googleId`,`name`,`email`,`admin`) VALUES
-- ('','','','');
-- INSERT INTO `Posts` (`id`,`author`,`html`,`creationDate`,`editDate`) VALUES
-- ('','','','','');