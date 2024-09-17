const { createServer } = require("node:http");
const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://localhost:27017";
const hostname = "127.0.0.1";
const port = 3000;
const client = new MongoClient(url);

const server = createServer(async (req, res) => {
    await client.connect();
    const collection = client.db("mr_duck").collection("problems");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", async () => {
            const data = JSON.parse(body);
            try {
                const result = await collection.insertOne(data);
                res.statusCode = 201;
                res.end(
                    JSON.stringify({
                        message: "Data inserted",
                        insertedId: result.insertedId,
                    })
                );
            } catch (error) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: error.message }));
            }
        });
    } else if (req.method === "GET") {
        try {
            const documents = await collection.find({}).toArray();
            res.statusCode = 200;
            res.end(JSON.stringify(documents));
        } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
        }
    } else if (req.method === "DELETE") {
        const urlParams = new URL(req.url, `http://${hostname}:${port}`);
        const id = urlParams.searchParams.get("id");

        if (id) {
            try {
                const result = await collection.deleteOne({
                    _id: new ObjectId(id),
                });
                if (result.deletedCount === 1) {
                    res.statusCode = 200;
                    res.end(JSON.stringify({ message: "Document deleted" }));
                } else {
                    res.statusCode = 404;
                    res.end(JSON.stringify({ error: "Document not found" }));
                }
            } catch (error) {
                res.statusCode = 500;
                console.log(error);
                res.end(JSON.stringify({ error: error.message }));
            }
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Missing or invalid id" }));
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
