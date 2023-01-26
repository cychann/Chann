import { getDatabase, ref, set, remove, get } from "firebase/database";
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

export function readProductData() {
  return get(ref(db, "products")).then((data) => {
    if (data.exists()) {
      return Object.values(data.val());
    }
    return [];
  });
}

export function addProductToLike(product, userId) {
  set(ref(db, `likes/${userId}/${product.id}`), product);
}

export function removeProductToLike(product, userId) {
  remove(ref(db, `likes/${userId}/${product.id}`));
}

export function readLikeProduct(userId) {
  return get(ref(db, `likes/${userId}`)).then((data) => {
    if (data.exists()) {
      return Object.values(data.val());
    }
    return [];
  });
}

export function addOrUpdateProductToBasket(product, userId) {
  set(ref(db, `basket/${userId}/${product.id}`), product);
}

export function removeProductToBasket(product, userId) {
  remove(ref(db, `basket/${userId}/${product.id}`));
}

export function readBasketProduct(userId) {
  return get(ref(db, `basket/${userId}`)).then((data) => {
    if (data.exists()) {
      return Object.values(data.val());
    }
    return [];
  });
}
