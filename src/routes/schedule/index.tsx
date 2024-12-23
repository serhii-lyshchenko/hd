import Head from '@/components/layout/head';
import SectionSchedule from '@/routes/schedule/components/section-schedule';

export default function Schedule() {
  return (
    <main>
      <Head title="Запис на консультацію онлайн">
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Запис на консультацію. Я обовʼязково з вами звʼяжусь та підтверджу запис. У місті Запоріжжя є можливість проведення офлайн консультацій."
        />

        <meta property="og:locale" content="uk_UA" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Запис на консультацію онлайн | Психолог Ганна Лищенко" />
        <meta
          property="og:description"
          content="Запис на консультацію. Я обовʼязково з вами звʼяжусь та підтверджу запис. У місті Запоріжжя є можливість проведення офлайн консультацій."
        />
        <meta property="og:url" content="https://hannapsychologist.com.ua/about" />
        <meta property="og:site_name" content="Психолог Ганна Лищенко" />
        <meta property="og:image" content="https://hannapsychologist.com.ua/images/photos/me.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="852" />
        <meta property="og:image:type" content="image/jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Запис на консультацію. Я обовʼязково з вами звʼяжусь та підтверджу запис. У місті Запоріжжя є можливість проведення офлайн консультацій."
        />
        <meta
          name="twitter:title"
          content="Запис на консультацію онлайн | Психолог Ганна Лищенко"
        />
        <meta
          name="twitter:image"
          content="https://hannapsychologist.com.ua/images/photos/me.jpg"
        />
      </Head>
      <SectionSchedule />
    </main>
  );
}
