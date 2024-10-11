const express = require("express");
var cors = require("cors");
const { insert } = require("./databaseConnections/inserOne");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    console.log(req.params);
    res.send("All destinations");
});
app.post("/", (req, res) => {
    const x = insert(req.body);
    console.log(x);
    res.send(`Created ${req.body}`);
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
