import fetch, { RequestInfo } from "node-fetch";
import { client } from "./oauth";
import { Cache } from "@raycast/api";


const cacheProvider = new Cache();

export async function get(url: RequestInfo, signal?: AbortSignal) {
  const tokenSet = await client.getTokens();

  console.debug(`GET ${url}`);
  const response = await fetch(url, {
    method: "GET",
    signal,
    compress: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenSet?.accessToken}`,
    },
  });

  if (!response.ok) {
    console.error("fetch items error:", await response.text());
    throw new Error(response.statusText);
  }
  console.debug(`GET ${url} - OK`);
  return response.json();
}


export async function cache(key: string, fetcher: () => Promise<any>, ttl: number = 24 * 60 * 60 * 1000) {
  if (cacheProvider.has(key)) {
    const cached = cacheProvider.get(key);
    const obj = JSON.parse(cached as string);
    if (obj.createdAt + ttl > Date.now()) {
      console.debug(`Cache hit for ${key}`);
      return obj.value;
    }
    cacheProvider.remove(key);
  }

  const result = await fetcher();
  cacheProvider.set(key, JSON.stringify({ value: result, createdAt: Date.now() }));
  return result;
}