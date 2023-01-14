import * as pup from "puppeteer";

const url =
  "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";

export async function scraper() {
  const browser = await pup.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);

  const products = await page.$$eval(".thumbnail", (parent) =>
    parent.map((parent) => {
      const title = parent.children[1].children[1].children[0].title;
      if (title.includes("Lenovo")) {
        return {
          title,
          price: parent.children[1].children[0].innerHTML,
          description: parent.children[1].children[2].innerHTML,
          rating: parent.children[2].children[1].getAttribute("data-rating"),
          numberOfReviews: parent.children[2].children[0].innerHTML,
        };
      }
    })
  );

  const searchedProducts = products.filter((p) => p);

  console.log(searchedProducts);

  setTimeout(() => {
    browser.close();
  }, 3000);
}

scraper();
