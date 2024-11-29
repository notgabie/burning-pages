import { Elysia } from "elysia";
import client from "./redis";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/messages", async () => {
    const messages = await client.lRange("messages", 0, -1);
    return messages.map((message) => JSON.parse(message));
  })
  .post("/messages", async ({ body }) => {
    //TODO fix typescript error
    const { message } = body;
    if (!message) { return { error: "Message is required" }}
    
    await client.lPush("messages", JSON.stringify({ message }));
    return { success: true };
  })
  .listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
