import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
mkdirSync(dist, { recursive: true });

const files = [
  ["public/_redirects", "dist/_redirects"],
  ["public/_headers", "dist/_headers"],
  ["public/favicon.ico", "dist/favicon.ico"],
];

for (const [src, dst] of files) {
  if (existsSync(src)) {
    copyFileSync(src, dst);
    console.log(`copied: ${src} -> ${dst}`);
  } else {
    console.log(`skip (missing): ${src}`);
  }
}
