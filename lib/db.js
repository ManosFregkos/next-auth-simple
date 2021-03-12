import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ManosFr:6944238811e@cluster0.j1iir.mongodb.net/secondDB?retryWrites=true&w=majority"
  );

  return client;
}
