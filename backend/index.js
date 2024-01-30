import app from "./server.js";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import MoviesDAO from './dao/MoviesDAO.js';
import ReviewsDAO from './dao/reviewsDAO.js';

dotenv.config();
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = process.env.MONGODB_CONNECT_URI;
const port = process.env.PORT || 8000;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    await MoviesDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)
    // Send a ping to confirm a successful connection
    await client.db("admin2").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    app.listen(port, (error) => {
      console.log(`Server is running on ${port}`);
      if (error) console.error(error);
    });


  }catch(e){
    console.error(e);
    await client.close();
  }finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir);
