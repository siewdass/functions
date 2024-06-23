export function register( { database } ) {
    const collection = database.collection('Beheart');
    const results = await collection.find(query).toArray();
  console.log(results)

  return ['asdasd',2]
}