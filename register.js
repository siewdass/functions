export async function register( { database } ) {
  const results = await database.collection('Beheart').find({}).toArray();
  return await collection.find({}).toArray()
}