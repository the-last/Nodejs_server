/*
 Navicat MySQL Data Transfer

 Source Server         : 172.16.10.162
 Source Server Type    : MySQL
 Source Server Version : 50635
 Source Host           : 172.16.10.162
 Source Database       : fabricexplorer

 Target Server Type    : MySQL
 Target Server Version : 50635
 File Encoding         : utf-8

 Date: 07/07/2017 10:14:31 AM
*/

DROP DATABASE IF EXISTS `expressuser`;

CREATE DATABASE expressuser;

use expressuser;
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `blocks`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(128) DEFAULT NULL,
  `password` int(4) DEFAULT NULL,
  `mail` varchar(128) DEFAULT null,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='users';
