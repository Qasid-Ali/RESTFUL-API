require("dotenv").config();

const connectDB = require("./db/connect");
const ProductModel = require("./models/product");
const ProductJson = require("./product.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await ProductModel.deleteMany();
        await ProductModel.create(ProductJson)

    } catch(err) {
        console.log(err);
    }
}

start();
