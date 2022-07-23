//Create a new database called "test" and create mock data for testing purposes.
const dbConnect = require("./dbConnect");
const Account = require("./model/account");
const Product = require("./model/product");
const Distribution = require("./model/distribution");

async function main() {
  await dbConnect();
  await Account.insertMany([
    {
      uuid: "O",
      type: "M",
    },
    {
      uuid: "1",
      type: "A",
    },
    {
      uuid: "2",
      type: "C",
    },
  ]);
  await Product.insertMany([
    {
      uuid: "p1",
      salePrice: 100,
    },
    {
      uuid: "p2",
      salePrice: 200,
    },
    {
      uuid: "p3",
      salePrice: 300,
    },
  ]);

  await Distribution.insertMany([
    {
      uuid: "d1",
      from: "0",
      to: "1",
      products: ["p1", "p2"],
    },
    {
      uuid: "d2",
      from: "0",
      to: "2",
      products: ["p1", "p3"],
    },
  ]);
  console.log("Database initialized.");
  process.exit(0);
}

main().catch((err) => console.log(err));
