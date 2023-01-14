import { scraper } from "./webScrapper";

export async function getOrderedInfo(searchFor: string) {
  const products = await scraper(searchFor);

  products.forEach((p) => (p.price = p.price.slice(1)));

  products.sort((p1, p2) => {
    return Number(p1.price) - Number(p2.price);
  });

  products.forEach((p) => (p.price = "$" + p.price));

  return products;
}
