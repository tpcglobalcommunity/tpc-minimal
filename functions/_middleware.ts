import { PagesFunction } from "@cloudflare/workers-types";

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  // Allow assets & files to pass through
  if (
    url.pathname.startsWith("/assets/") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".ico")
  ) {
    return context.next();
  }

  // Force SPA fallback to index.html
  return context.env.ASSETS.fetch(
    new Request(new URL("/index.html", url), context.request)
  );
};
