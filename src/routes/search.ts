import { Hono } from "hono";

const searchRoute = new Hono().get("/", (c) => {
  return c.json({ search: true });
});

export default searchRoute;
