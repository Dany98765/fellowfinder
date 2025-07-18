// import { notFound } from 'next/navigation';
// import { NextIntlClientProvider } from 'next-intl';
// import { dir } from 'i18next';
// import { languages } from '@/i18n/settings';
// import '../../styles/globals.css';

// export async function generateStaticParams() {
//   return languages.map((locale) => ({ locale }));
// }

// export default async function LocaleLayout({ children, params }) {
//   const { locale } = params;

//   // Validate locale
//   if (!languages.includes(locale)) notFound();

//   // Load messages from JSON files
//   let messages;
//   try {
//     messages = (await import(`../../../public/locales/${locale}.json`)).default;
//   } catch (error) {
//     console.error(`Missing translation file for locale: ${locale}`);
    
//   }

//   return (
//     <html lang={locale} dir={dir(locale)}>
//       <body>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import fs from 'fs';
import path from 'path';
import '../../styles/globals.css';

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

function flattenMessages(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null) {
      Object.assign(acc, flattenMessages(value, prefixedKey));
    } else {
      acc[prefixedKey] = value;
    }

    return acc;
  }, {});
}

async function loadMessages(locale) {
  const localeDir = path.join(process.cwd(), 'public', 'locales', locale);
  const readRecursive = async (dirPath) => {
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
    let messages = {};

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        const subMessages = await readRecursive(fullPath);
        messages = { ...messages, ...subMessages };
      } else if (entry.name.endsWith('.json')) {
        const relPath = path.relative(localeDir, fullPath).replace('.json', '');
        const json = JSON.parse(await fs.promises.readFile(fullPath, 'utf-8'));
        messages[relPath] = json;
      }
    }

    return messages;
  };

  const nestedMessages = await readRecursive(localeDir);

  // Flatten structure for next-intl (e.g. "landing.hero.title": "..." )
  let flat = {};
  for (const key in nestedMessages) {
    flat = {
      ...flat,
      ...flattenMessages(nestedMessages[key], key),
    };
  }

  return flat;
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!languages.includes(locale)) notFound();

  let messages;
  try {
    messages = await loadMessages(locale);
  } catch (error) {
    console.error(`Failed to load translations for locale "${locale}":`, error);
    notFound();
  }

  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
