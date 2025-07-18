import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n/settings'; // Adjust path if needed

export default createMiddleware({
    locales: ['en', 'ar'],
    defaultLocale: 'en',
})
export const config = {
    matcher: ['/', '(en|ar)/:path*'],
}