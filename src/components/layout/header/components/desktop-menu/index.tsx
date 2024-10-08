import Link from 'next/link';
import Image from 'next/image';

import HeaderLink from '@/components/layout/header/components/header-link';

import LogoImage from '@/images/logo.png';

export default function DesktopMenu() {
  return (
    <header className="w-full absolute z-50 hidden md:block">
      <div className="flex flex-row items-center container p-6 xl:pl-24">
        <Link href="/">
          <Image src={LogoImage} alt="Ганна Лищенко Психолог Запоріжжя" width={120} />
        </Link>
        <nav className="flex flex-row items-center">
          <HeaderLink href="/services" text="Послуги" />
          <HeaderLink href="/about" text="Про мене" />
          <HeaderLink href="/contacts" text="Контакти" />
          <HeaderLink href="/faq" text="Питання" />
          <HeaderLink href="/schedule" text="Запис" />
        </nav>
      </div>
    </header>
  );
}
