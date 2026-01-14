import { useLocation, useNavigate } from "react-router-dom";

function swapLang(pathname: string, target: "en" | "id") {
  // expect: /en/public or /id/public (and deeper later)
  const parts = pathname.split("/").filter(Boolean); // ["en","public",...]
  if (parts.length === 0) return `/${target}/public`;
  if (parts[0] === "en" || parts[0] === "id") parts[0] = target;
  else parts.unshift(target);
  return "/" + parts.join("/");
}

export default function LanguageSwitcher() {
  const nav = useNavigate();
  const loc = useLocation();
  const parts = loc.pathname.split("/").filter(Boolean);
  const current = parts[0] === "id" ? "id" : "en";

  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
      <button
        className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
          current === "en" ? "bg-white/10" : "text-white/70 hover:bg-white/5"
        }`}
        onClick={() => nav(swapLang(loc.pathname, "en"), { replace: true })}
        type="button"
      >
        EN
      </button>
      <button
        className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
          current === "id" ? "bg-white/10" : "text-white/70 hover:bg-white/5"
        }`}
        onClick={() => nav(swapLang(loc.pathname, "id"), { replace: true })}
        type="button"
      >
        ID
      </button>
    </div>
  );
}
