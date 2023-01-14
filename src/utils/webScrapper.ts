import * as pup from "puppeteer";

const url =
  "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";

export async function scraper(searchFor: string) {
  const browser = await pup.launch();
  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector(".thumbnail");

  const products = await page.$$eval(".thumbnail", (parent) =>
    parent.map((p) => {
      return {
        title: p.children[1].children[1].children[0].getAttribute("title"),
        price: p.children[1].children[0].innerHTML,
        description: p.children[1].children[2].innerHTML,
        rating: p.children[2].children[1].getAttribute("data-rating"),
        numberOfReviews: p.children[2].children[0].innerHTML,
      };
    })
  );

  await browser.close();

  return products.filter((validProduct) =>
    validProduct.title.includes(searchFor)
  );
}
