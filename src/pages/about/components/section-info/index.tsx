import Image from 'next/image';

import ButtonLink from '@/components/buttons/button-link';
import ParallaxBackground from '@/components/parallax-background';

export default function SectionInfo() {
  return (
    <div className="min-h-screen relative border-t border-black">
      <ParallaxBackground
        className="bg-cover opacity-20 md:bg-right-bottom bg-center"
        backgroundImage="/images/photos/about-info.png"
      />
      <div className="z-20 relative container min-h-screen flex flex-col md:flex-row items-center justify-center">
        <Image
          src="/images/photos/about-info.png"
          alt="logo"
          className="block max-w-full rounded-full border border-black object-cover mx-auto w-72 lg:w-[400px] w-24"
          width={400}
          height={400}
        />
        <div className="w-full px-5 sm:w-3/4 md:w-1/2 mt-6 md:mt-0 md:text-left text-center">
          <h3 className="text-3xl font-serif text-black mb-6">Записуйся на консультацію!</h3>
          <p className="font-sans italic text-black text-lg">
            Працювати в цій сфері - моє покликання! Я з великим задоволенням ділюся своїми знаннями
            та досвідом на наших консультаціях. Тож якщо Ви відчуваєте що вам потрібна допомога - не
            зволікайте!
          </p>
          <ButtonLink href={'/schedule'} className="mt-8 md:mx-0 mx-auto" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
