// async loop
export default async function asyncFor(array = [], callback) {
  for (const item of array) {
    await callback(item);
  }
}
