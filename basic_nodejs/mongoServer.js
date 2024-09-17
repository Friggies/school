import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

export async function run(parsedBody) {
    try {
        await client.connect();
        const myDB = client.db("test_1");
        const myColl = myDB.collection("collection_1");

        const doc = parsedBody;
        console.log(parsedBody);
        const result = await myColl.insertOne(doc);
        console.log(
            `A document was inserted with the _id: ${result.insertedId}`
        );
        /*
        const findResult = await myColl.findOne(
            new ObjectId("66e7f87dd33d381474a8e8b2")
        );
        console.log(findResult);
        */
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
