import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: [
        '/',
        '/(en|es)/:path*',
        // dont serve api or any nextjs utility routes
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ]
};
