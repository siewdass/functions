export async function register( { database } ) {
  const collection = database('Beheart');
  const results = await collection.find({}).toArray();
  return await collection.find({}).toArray()
}