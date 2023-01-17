import { getDatabase, ref, set } from "firebase/database";
import app from "./firebaseSDK";
import { v4 as uuid } from "uuid";

const db = getDatabase(app);

export function writeUserData(product) {
  console.log(product);
  const id = uuid();
  set(ref(db, `products/${id}`), {
    id,
    imageURL: product.imageURL,
    name: product.name,
    price: product.price,
    catecory: product.catecory,
    description: product.description,
    options: product.options.split(","),
  });
}
