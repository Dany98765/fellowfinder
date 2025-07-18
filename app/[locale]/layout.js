import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import '../../styles/globals.css';

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default function Layout({ children, params }) {
  const { locale } = params;

  return (
    <html lang={locale} dir={dir(locale)}>
      <body>{children}</body>
    </html>
  );
}
