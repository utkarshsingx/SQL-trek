# take care of AND/ OR notations, here asked if any one condition meets than country is big so OR is used, 1 attempt i selected AND that was my mistake

SELECT name, population, area FROM World
WHERE area >= 3000000 OR population >= 25000000;