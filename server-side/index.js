 import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());

// Netlify rewrites to /.netlify/functions/api/... so strip that prefix
app.use((req, res, next) => {
  req.url = req.url.replace(/^\/\.netlify\/functions\/api/, "") || "/";
  next();
});

// Set MONGO_URI in Netlify -> Site settings -> Environment variables
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let dbConnection = null;

async function getCollections() {
  if (!uri) throw new Error("MONGO_URI is not set");
  if (!dbConnection) {
    await client.connect();
    dbConnection = client.db("myDatabase");
  }
  return {
    usersCollection: dbConnection.collection("users"),
    adminsCollection: dbConnection.collection("admins"),
  };
}

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const { usersCollection } = await getCollections();
    const existingUser = await usersCollection.findOne({
      contact: user.contact,
      group: user.group,
      location: user.location,
    });
    if (existingUser) {
      return res
        .status(400)
        .send({ success: false, message: "This donor is already registered!" });
    }
    const result = await usersCollection.insertOne(user);
    res.send({
      success: true,
      message: "User added successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Server error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const { usersCollection } = await getCollections();
    const users = await usersCollection.find().toArray();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Failed to fetch users" });
  }
});

app.post("/admin/login", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { adminsCollection } = await getCollections();
    const admin = await adminsCollection.findOne({ name, email, password });
    if (!admin) {
      return res.status(401).send({
        success: false,
        message: "Name, Email or Password is wrong!",
      });
    }
    res.send({ success: true, message: "Admin login successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Login failed" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { usersCollection } = await getCollections();
    const result = await usersCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }
    res.send({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Failed to delete user" });
  }
});

// Local development only
if (!process.env.NETLIFY && process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

export default app;