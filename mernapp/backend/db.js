const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://PreetAnam:gofood123@cluster0.sw1kcp5.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// const mongoURI = 'mongodb://PreetAnam:gofood123@ac-phqyqyt-shard-00-00.sw1kcp5.mongodb.net:27017,ac-phqyqyt-shard-00-01.sw1kcp5.mongodb.net:27017,ac-phqyqyt-shard-00-02.sw1kcp5.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-zrc98k-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.set("strictQuery", false);
const mongo = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("Connected Successfully");
        const fetched_data = await mongoose.connection.db.collection(
          "fooditems"
        );
        fetched_data.find({}).toArray(async function (err, fetched_data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategories"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log("---", err);
            else {
              global.fooditems = fetched_data;
              global.foodCategory = catData;
              console.log(global.fooditems);
            }
          });
        });
      }
    }
  );
};
module.exports = mongo;
