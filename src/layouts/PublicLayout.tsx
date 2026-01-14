import { Outlet } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#0B0E11] text-[#EAECEF]">
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0E11]/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#12161C] ring-1 ring-white/10">
              <div className="h-2.5 w-2.5 rounded-full bg-[#F0B90B]" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">TPC</div>
              <div className="text-[11px] text-white/60">Trader Professional Community</div>
            </div>
          </div>

          <LanguageSwitcher />
        </div>
      </header>

      {/* Page container */}
      <main className="mx-auto max-w-[1200px] px-4 pb-16 pt-6 sm:pt-10">
        <Outlet />
      </main>
    </div>
  );
}
