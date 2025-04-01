import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

let lastValidLocale: string | null = null;

async function getMessages(locale: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/locales/${locale}`
  );
  if (!res.ok) return null;

  return await res.json();
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  if (locale && routing.locales.includes(locale as any)) {
    lastValidLocale = locale;
  } else if (!locale && lastValidLocale) {
    locale = lastValidLocale;
  } else {
    locale = routing.defaultLocale;
  }

  const messages = await getMessages(locale);

  return {
    locale,
    messages: messages
      ? messages
      : (await import(`../messages/${locale}.json`)).default,
  };
});
