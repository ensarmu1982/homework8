var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "products_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runStore();
});

function runStore(){
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res, fields) {
        console.log("Available items to order: ");
        // console.log(res);
        for (var i = 0; i < res.length; i++) {
          console.log("Product id: " + res[i].product_id + " || Department name: " + res[i].department_name + 
          " || Item unit price: " + res[i].price);
        }
        runSearch();
    })
}

function runSearch(){
    inquirer.prompt([
        {
          name: "product_id",
          type: "input",
          message: "Product id you would like to purchase?"
        }, {
          name: "stock_quantity",
          type: "input",
          message: "Quantity you would like to purchase?"
        }
      ]).then(function(answers) {
        console.log(answers);
        var j= answers.product_id;
        var orderQty = answers.stock_quantity ;

        console.log(j);
        console.log(orderQty);
        //connection to the table here 

        var query = "SELECT product_id,department_name,price,stock_quantity FROM products WHERE ?";
        connection.query(query, [answers.product_id], function(err, res) {
          console.log(
            "product_id: " +
              res[j-1].product_id +
              " || department_name: " +
              res[j-1].department_name +
              " || price: " +
              res[j-1].price +
              " || stock_quantity: " +
              res[j-1].stock_quantity
          );

          if (res[j-1].stock_quantity < orderQty){
            console.log("Insufficent Qty");
          } else{
            console.log("Summary of your order is: ");
            var totalItemCost = orderQty*res[j-1].price;
            var inventQty = res[j-1].stock_quantity;
            var remainQty = inventQty - orderQty;
            console.log("Item total cost is: $"+ totalItemCost);
            console.log("Qty remaining in inventory: " + remainQty);
            //update the remaining inventory
            //show the remaining inventory
            //then runStore to prompt item to purchase
            // runStore();
          }
        })
      })
  
}