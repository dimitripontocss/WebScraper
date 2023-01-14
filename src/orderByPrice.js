import { scraper } from "./webScrapper.js";

export async function orderByPrice() {
  const products = await scraper();

  products.forEach((p) => (p.price = p.price.slice(1)));

  products.sort((p1, p2) => {
    return p1.price - p2.price;
  });

  products.forEach((p) => (p.price = "$" + p.price));

  return products;
}
