import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "4044o4y1s3",
  apiKey: process.env.API_KEY!,
});
