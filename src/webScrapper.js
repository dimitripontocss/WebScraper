import * as pup from "puppeteer";

const url =
  "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";

export async function scraper() {
  const browser = await pup.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const products = await page.$$eval(".thumbnail", (parent) =>
    parent.map((p) => {
      const title = p.children[1].children[1].children[0].title;
      if (title.includes("Lenovo")) {
        return {
          title,
          price: p.children[1].children[0].innerHTML,
          description: p.children[1].children[2].innerHTML,
          rating: p.children[2].children[1].getAttribute("data-rating"),
          numberOfReviews: p.children[2].children[0].innerHTML,
        };
      }
    })
  );

  await browser.close();

  return products.filter((validProduct) => validProduct);
}
