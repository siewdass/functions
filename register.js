export async function register( { database } ) {
  const collection = database.collection('Beheart');
  const results = await collection.find({}).toArray();
  console.log(results)

  return ['asdasd',2]
}