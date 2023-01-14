import { getOrderedInfo } from "../utils/getOrderedInfo";

export async function getInfo(searchFor: string) {
  const products = await getOrderedInfo(searchFor);
  return products;
}
