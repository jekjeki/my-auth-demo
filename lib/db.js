import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://zaki:zaki123@cluster0.jvzl4pa.mongodb.net/'
  );

  return client;
}
