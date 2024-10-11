const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const collection = client.db("mr_duck").collection("problems");

const insert = async (data) => {
    await client.connect();
    try {
        const result = await collection.insertOne(data);
        return result.insertedId;
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: error.message }));
    } finally {
        client.close();
    }
};

module.exports = { insert };
