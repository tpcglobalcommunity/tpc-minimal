import { Navigate, Route, Routes } from "react-router-dom";
import LangLayout from "./layouts/LangLayout";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/public/HomePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/:lang" element={<LangLayout />}>
        <Route path="public" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/en/public" replace />} />
    </Routes>
  );
}
