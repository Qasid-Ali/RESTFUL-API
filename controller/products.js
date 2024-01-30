const ProductModel = require("../models/product");

const getAllProducts = async (req, res) => {
    const {company, name, featured, sort, select } = req.query;
    const optionQueryObject = {};

    if (company) {
        optionQueryObject.company = company;
    }

    if (featured) {
        optionQueryObject.featured = featured;
    }

    if (name) {
        optionQueryObject.name = name;
    }

    let apiData = ProductModel.find(optionQueryObject)

    if (sort) {
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const Products = await apiData;
    res.status(200).json({Products})
}

const getAllProductsTesting = async (req, res) => {

    const Products = await ProductModel.find(req.query);
    res.status(200).json({Products})
}

module.exports = {getAllProducts, getAllProductsTesting};