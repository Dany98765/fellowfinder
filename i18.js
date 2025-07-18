// middleware.ts or i18n.ts (wherever you define next-intl config)

import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ar'];

export default getRequestConfig(async (locale) => {
  const landing = (await import(`./public/locales/${locale}/landing/hero.json`)).default;
 //const navbar = (await import(`./public/locales/${locale}/navbar.json`)).default;
  //const footer = (await import(`./public/locales/${locale}/footer.json`)).default;

  // Combine them all into one object
  return {
    messages: {
      ...landing,
    }
  };
});
