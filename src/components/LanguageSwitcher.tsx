import { useLocation, useNavigate } from "react-router-dom";

function swapLang(pathname: string, target: "en" | "id") {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}/public`;
  if (parts[0] === "en" || parts[0] === "id") parts[0] = target;
  else parts.unshift(target);
  return "/" + parts.join("/");
}

export default function LanguageSwitcher() {
  const nav = useNavigate();
  const loc = useLocation();
  const parts = loc.pathname.split("/").filter(Boolean);
  const current: "en" | "id" = parts[0] === "id" ? "id" : "en";

  const base =
    "rounded-xl px-3 py-2 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B90B]/60";

  return (
    <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-[#12161C] p-1">
      <button
        type="button"
        className={`${base} ${
          current === "en"
            ? "bg-white/10 text-white"
            : "text-white/70 hover:bg-white/5"
        }`}
        onClick={() => nav(swapLang(loc.pathname, "en"), { replace: true })}
      >
        EN
      </button>
      <button
        type="button"
        className={`${base} ${
          current === "id"
            ? "bg-white/10 text-white"
            : "text-white/70 hover:bg-white/5"
        }`}
        onClick={() => nav(swapLang(loc.pathname, "id"), { replace: true })}
      >
        ID
      </button>
    </div>
  );
}
