'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  const userName = 'David';

  return (
    <div>
      <h1>HomePage</h1>
      {/* <h1>{t('header', { name: userName })}</h1> */}
    </div>
  );
}
