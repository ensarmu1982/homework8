DROP DATABASE IF EXISTS products_DB;
CREATE database products_DB;

USE products_DB;

CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NULL,
  department_name VARCHAR(30) NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (product_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla1", "cloth1", 12.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla2", "cloth2", 22.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla3", "cloth3", 32.50, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla4", "cloth4", 42.50, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla5", "cloth5", 52.50, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla6", "cloth6", 62.50, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla7", "cloth7", 72.50, 700);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla8", "cloth8", 82.50, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla9", "cloth9", 92.50, 900);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla10", "cloth10", 102.50, 1000);