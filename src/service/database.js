import { getDatabase, ref, set, onValue, remove } from "firebase/database";
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

export function addProductToLike(product, userId) {
  set(ref(db, `likes/${userId}/${product.id}`), product);
}

export function removeProductToLike(product, userId) {
  remove(ref(db, `likes/${userId}/${product.id}`));
}

export function readLikeProduct(onUpdate) {
  const productRef = ref(db, "likes");
  onValue(productRef, (snapshot) => {
    const data = snapshot.val();
    onUpdate(data);
  });
}

export function addProductToBasket(product, userId) {
  set(ref(db, `basket/${userId}/${product.id}`), product);
}

export function removeProductToBasket(product, userId) {
  remove(ref(db, `basket/${userId}/${product.id}`));
}

export function readBasketProduct(onUpdate) {
  const productRef = ref(db, "basket");
  onValue(productRef, (snapshot) => {
    const data = snapshot.val();
    onUpdate(data);
  });
}
