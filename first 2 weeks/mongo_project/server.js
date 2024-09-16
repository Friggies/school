const { createServer } = require("node:http");
const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://localhost:27017";
const hostname = "127.0.0.1";
const port = 3000;
const client = new MongoClient(url);

const server = createServer(async (req, res) => {
    await client.connect();
    const collection = client.db("travel_destinations").collection("destinations");

    res.setHeader("Content-Type", "application/json");

    if (req.method === "POST" && req.url === "/create") {
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
                    JSON.stringify({ message: "Data inserted", insertedId: result.insertedId })
                );
            } catch (error) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: error.message }));
            }
        });
    } else if (req.method === "GET" && req.url.startsWith("/read")) {
        const id = new URL(req.url, `http://${hostname}:${port}`).searchParams.get("id");
        try {
            const query = id ? { _id: new ObjectId(id) } : {};
            const documents = await collection.find(query).toArray();
            res.statusCode = 200;
            res.end(JSON.stringify(documents));
        } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
        }
    } else if (req.method === "PUT" && req.url.startsWith("/update")) {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", async () => {
            const data = JSON.parse(body);
            const id = new URL(req.url, `http://${hostname}:${port}`).searchParams.get("id");
            try {
                const result = await collection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: data }
                );
                if (result.modifiedCount > 0) {
                    res.statusCode = 200;
                    res.end(JSON.stringify({ message: "Data updated" }));
                } else {
                    res.statusCode = 404;
                    res.end(JSON.stringify({ message: "No document found to update" }));
                }
            } catch (error) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: error.message }));
            }
        });
    } else if (req.method === "DELETE" && req.url.startsWith("/delete")) {
        const id = new URL(req.url, `http://${hostname}:${port}`).searchParams.get("id");
        try {
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            if (result.deletedCount > 0) {
                res.statusCode = 200;
                res.end(JSON.stringify({ message: "Data deleted" }));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: "No document found to delete" }));
            }
        } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
