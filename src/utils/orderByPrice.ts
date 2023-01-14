import { scraper } from "./webScrapper";

export async function orderByPrice() {
  const products = await scraper("Lenovo");

  products.forEach((p) => (p.price = p.price.slice(1)));

  products.sort((p1, p2) => {
    return Number(p1.price) - Number(p2.price);
  });

  products.forEach((p) => (p.price = "$" + p.price));

  console.log(products);

  return products;
}

orderByPrice();
