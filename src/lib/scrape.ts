import { urls } from "../../urls";
import * as cheerio from "cheerio";

export async function scrape() {
  let titles = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        },
      });

      if (!res.ok) {
        console.error(`Failed to fetch ${url}: ${res.status}`);
        continue;
      }

      const html = await res.text();
      const $ = cheerio.load(html);
      const title = $("title").text().trim();

      titles.push(title);
    } catch (err) {
      console.error(`[×] Error scraping ${url}:`, err);
    }
  }
  return titles;
}
