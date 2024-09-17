import { createServer } from "node:http";
import { run } from "./mongoServer.js";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            run(parsedBody).catch(console.dir);
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
