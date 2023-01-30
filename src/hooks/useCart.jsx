import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthentication } from "../context/AuthProvider";
import {
  addOrUpdateProductToCart,
  readCartProduct,
  removeProductToCart,
} from "../api/firebase";

export default function useCart() {
  const queryClient = useQueryClient();
  const { user } = useAuthentication();

  const cartQuery = useQuery(
    ["cart_products", user && user.uid],
    () => readCartProduct(user && user.uid),
    {
      enabled: (user && !!user.uid) || false,
    }
  );

  const addOrUpdateCartProduct = useMutation(
    (product) => addOrUpdateProductToCart(product, user.uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart_products", user.uid]);
      },
    }
  );

  const removeCartProduct = useMutation(
    (product) => removeProductToCart(product, user.uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart_products", user.uid]);
      },
    }
  );

  return { cartQuery, addOrUpdateCartProduct, removeCartProduct };
}
