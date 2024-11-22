import { useTranslations } from "next-intl";

export default function SalePage() {
    const t = useTranslations('SalePage');

    return <div>{t('description')}</div>

}