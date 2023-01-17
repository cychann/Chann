import { getDatabase, ref, set, onValue, off, query } from "firebase/database";
import app from "./firebaseSDK";
import { v4 as uuid } from "uuid";

const db = getDatabase(app);

export function writeProductData(product) {
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

export function readProductData(onUpdate) {
  const productRef = ref(db, "products");
  onValue(productRef, (snapshot) => {
    const data = snapshot.val();
    data && onUpdate(data);
  });
}
