import {setRequestLocale} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navbar from '@/components/global/navbar/navbar';
import Footer from '@/components/global/footer';
 
type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 
export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
 
  return (
    <>
      <div className='mb-20'>
        <Navbar></Navbar>
      </div>
      {children}
      <Footer></Footer>
    </>
  );
}