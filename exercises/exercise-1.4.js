const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options = {
    useNewUrlParse: true,
    useUnifiedTopology: true
}

const addUser = async (req, res) => {
    const newUser = req.body


        const client = await MongoClient(MONGO_URI, options);

        await client.connect();

        const db = client.db('exercise_1');

        await db.collection("users").insertOne(newUser);
        const users = await db.collection("users").find().toArray();

        res.status(201).json({message: "it worked!", users: users})

        client.close();
}

module.exports = {addUser};