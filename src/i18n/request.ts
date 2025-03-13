import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';


let lastValidLocale: string | null = null;

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  
  if (locale && routing.locales.includes(locale as any)) {
    lastValidLocale = locale;
  } else if (!locale && lastValidLocale) {
    locale = lastValidLocale;
  } else {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});