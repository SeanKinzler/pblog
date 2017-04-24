-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
-- 
-- ---

DROP TABLE IF EXISTS `User`;
    
CREATE TABLE `User` (
  `googleId` INTEGER NOT NULL,
  `name` INTEGER NULL DEFAULT NULL,
  `email` INTEGER NULL DEFAULT NULL,
  `admin` INTEGER NULL DEFAULT false,
  PRIMARY KEY (`googleId`)
);

-- ---
-- Table 'Posts'
-- 
-- ---

DROP TABLE IF EXISTS `Posts`;
    
CREATE TABLE `Posts` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `author` INTEGER NOT NULL,
  `html` MEDIUMTEXT NULL DEFAULT NULL,
  `creationDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `editDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Posts` ADD FOREIGN KEY (author) REFERENCES `User` (`googleId`);

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