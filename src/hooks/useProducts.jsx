import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addeProductData, readProductData } from "../service/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productQuery = useQuery(["products"], readProductData);

  const addProduct = useMutation((product) => addeProductData(product), {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return { productQuery, addProduct };
}
