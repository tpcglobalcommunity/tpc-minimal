import { Navigate, Outlet, useParams } from "react-router-dom";
import { I18nProvider, type Lang } from "../i18n";

export default function LangLayout() {
  const { lang } = useParams<{ lang: string }>();
  const valid = lang === "en" || lang === "id";

  if (!valid) return <Navigate to="/en/public" replace />;

  return (
    <I18nProvider lang={lang as Lang}>
      <Outlet />
    </I18nProvider>
  );
}
