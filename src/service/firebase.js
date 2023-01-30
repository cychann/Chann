import { getDatabase, ref, set, remove, get } from "firebase/database";
import app from "./firebaseSDK";
import { v4 as uuid } from "uuid";

const db = getDatabase(app);

export async function addeProductData(product) {
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

export async function readProductData() {
  return get(ref(db, "products")).then((data) => {
    if (data.exists()) {
      return Object.values(data.val());
    }
    return [];
  });
}

export async function addProductToLike(product, userId) {
  set(ref(db, `likes/${userId}/${product.id}`), product);
}

export async function removeProductToLike(product, userId) {
  remove(ref(db, `likes/${userId}/${product.id}`));
}

export async function readLikeProduct(userId) {
  return get(ref(db, `likes/${userId}`)).then((data) => {
    if (data.exists()) {
      return Object.values(data.val());
    }
    return [];
  });
}

export async function addOrUpdateProductToBasket(product, userId) {
  set(ref(db, `basket/${userId}/${product.id}`), product);
}

export async function removeProductToBasket(product, userId) {
  remove(ref(db, `basket/${userId}/${product.id}`));
}

export async function readBasketProduct(userId) {
  return get(ref(db, `basket/${userId}`)).then((data) => {
    if (data.exists()) {
      return Object.values(data.val());
    }
    return [];
  });
}
