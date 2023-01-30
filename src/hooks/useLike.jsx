import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthentication } from "../context/AuthProvider";
import {
  addProductToLike,
  readLikeProduct,
  removeProductToLike,
} from "../api/firebase";

export default function useLike() {
  const queryClient = useQueryClient();
  const { user } = useAuthentication();

  const likeQuery = useQuery(
    ["like_products", user && user.uid],
    () => readLikeProduct(user && user.uid),
    {
      enabled: (user && !!user.uid) || false,
    }
  );

  const addLikeProduct = useMutation(
    (product) => addProductToLike(product, user.uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["like_products", user.uid]);
      },
    }
  );

  const removeLikeProduct = useMutation(
    (product) => removeProductToLike(product, user.uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["like_products", user.uid]);
      },
    }
  );

  return { likeQuery, addLikeProduct, removeLikeProduct };
}
