export function register( { database } ) {
    const collection = database.collection('Beheart');
    const results = collection.find({}).toArray();
  console.log(results)

  return ['asdasd',2]
}