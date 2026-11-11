import { expect, test } from "bun:test";
import { resolve } from "node:path";
import { resolveConfig } from "vite";

test("GitHub produces static files in the folder uploaded to Pages", async () => {
  const config = await resolveConfig({ configFile: "vite.config.ts" }, "build");
  expect(resolve(config.environments.client.build.outDir)).toBe(resolve("dist/client"));
});