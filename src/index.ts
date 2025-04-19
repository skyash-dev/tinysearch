import { Hono } from "hono";
import searchRoute from "./routes/search";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to TinySearch");
});

app.basePath("/api").route("/search", searchRoute);

export default app;
