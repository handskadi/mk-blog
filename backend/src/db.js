import { MongoClient } from "mongodb";

let db;

async function conn_db(callback) {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.a7j96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
  await client.connect();

  db = client.db("react-blog-db");
  callback();
}

export { db, conn_db };
