CREATE TABLE IF NOT EXISTS `users` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `names` VARCHAR(50),
    `surnames` VARCHAR(50),
    `birthdate` DATE,
    `email` VARCHAR(50),
    `document` INT(7),
    `code` INT(2),
    `salary` DECIMAL(10,2),
    `status` BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `workplace` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `code` INT(2),
    `name` VARCHAR(50),
    `manager` INT(7),
    `status` BOOLEAN DEFAULT TRUE,
    `PRIMARY` KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;