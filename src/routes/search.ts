import { Hono } from "hono";
import { scrape } from "../lib/scrape";

const searchRoute = new Hono()
  .get("/", async (c) => {
    const titles = await scrape();
    return c.json({ titles });
    // return c.text("Search using passing params (/api/search/search_query)");
  })
  .get("/:query", (c) => {
    return c.json({ search: c.req.param("query") });
  });

export default searchRoute;
