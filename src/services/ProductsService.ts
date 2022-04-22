import { commerce } from "../lib/commerce";

export const fetchProducts = async (query: string) => {
  const { data } = await commerce.products.list();

  return data;
};
