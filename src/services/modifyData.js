const __CustomerType_schema = require('models').CustomerType;
const __Customer_schema = require('models').Customers;
const __Product_schema = require('models').Products;

async function isExist(schema, item) {
    try {
        var existItem = null;
        if (schema == "CUSTOMERTYPE")
            existItem = await __CustomerType_schema.findOne({ $or: [{ typeName: item.typeName }, { typeID: item.typeID }] });
        else if (schema == "CUSTOMER")
            existItem = await __Customer_schema.findOne({ $or: [{ idCode: item.idCode }, { phone: item.phone }, { email: item.email } ] });
        else if (schema == "PRODUCT")
            existItem = await __Product_schema.findOne({ $or: [ { productId: item.productId }, { name: item.name } ] });


        return (existItem != null) ? true : false
    } catch (error) {
        throw error;
    }
}

module.exports = {
    isExist
}