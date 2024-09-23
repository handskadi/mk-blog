import express from "express";
import { conn_db, db } from "./db.js";

const app = express();
app.use(express.json());

//
app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const article = await db.collection("articles").findOne({ name });
  if (article) {
    res.json(article);
  } else {
    res.status(404).send("Article not found");
  }
});

// Upvote API
app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  await db.collection("articles").updateOne(
    { name },
    {
      $inc: { upvotes: 1 },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.send(`The ${name} article now has ${article.upvotes} upvotes.`);
  } else {
    res.send(`The artilce Not Exsists`);
  }
});

// Comments API
app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, comment } = req.body;

  await db.collection("articles").updateOne(
    { name },
    {
      $push: {
        comments: {
          postedBy,
          comment,
        },
      },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.send(article.comments);
  } else {
    res.send(`The artilce Not Exsists`);
  }
});

conn_db(() => {
  console.log("Successfully connected to database!");
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
});
