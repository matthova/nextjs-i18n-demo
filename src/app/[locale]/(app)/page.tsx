import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const GITHUB_REPO_LINK = "https://github.com/matthova/nextjs-i18n-demo";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <div>
        {t.rich("github", {
          link: (chunks) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={GITHUB_REPO_LINK}
            >
              {chunks}
            </a>
          ),
        })}
      </div>
    </div>
  );
}
