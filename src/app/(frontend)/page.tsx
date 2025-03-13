import { headers } from 'next/headers';
import { redirect } from 'next/navigation';


async function getLocale() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';

  switch (true) {
    case acceptLanguage.includes('de'):
      return 'de';
    case acceptLanguage.includes('en'):
      return 'en';
    default:
      return 'de';
  }
}


export default async function RootPage() {
 const locale = await getLocale();
  // Redirect to the appropriate localized route
  redirect(`/${locale}`);
}