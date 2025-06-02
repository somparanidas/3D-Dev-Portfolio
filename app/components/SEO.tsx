import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

const SEO = () => {
  const router = useRouter();
  const canonicalUrl = `https://somparani.netlify.app${router.asPath}`;

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Sompa Rani Das - Creative 3D Developer"
        defaultTitle="Sompa Rani Das | Creative 3D Developer Portfolio"
        description="Award-winning Full-Stack Developer specializing in immersive 3D web experiences. Expert in React, Next.js, Three.js, and WebGL. Creating cutting-edge digital solutions with modern UI/UX design principles."
        canonical={canonicalUrl}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: canonicalUrl,
          site_name: 'Sompa Rani Das | Creative 3D Developer Portfolio',
          title: 'Sompa Rani Das | Creative 3D Developer Portfolio',
          description: 'Award-winning Full-Stack Developer specializing in immersive 3D web experiences. Expert in React, Next.js, Three.js, and WebGL. Creating cutting-edge digital solutions with modern UI/UX design principles.',
          images: [
            {
              url: 'https://somparani.netlify.app/logo.png',
              width: 1200,
              height: 630,
              alt: 'Sompa Rani Das Portfolio - Creative 3D Developer',
              type: 'image/png',
            },
          ],
          profile: {
            firstName: 'Sompa',
            lastName: 'Rani Das',
            username: 'somparanidas',
            gender: 'female',
          }
        }}
        twitter={{
          handle: '@somparanidas',
          site: '@somparanidas',
          cardType: 'summary_large_image',
        }}
        facebook={{
          appId: '123456789',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: '3D Developer, Creative Developer, WebGL Expert, Three.js Developer, React Developer, Next.js, UI/UX Designer, Full Stack Engineer, Interactive Websites, Web Animation, JavaScript Expert, TypeScript, Tailwind CSS, Modern Web Development, Portfolio, Sompa Rani Das',
          },
          { name: 'author', content: 'Sompa Rani Das' },
          { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
          { name: 'mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'application-name', content: 'Sompa Rani Das Portfolio' },
          { name: 'apple-mobile-web-app-title', content: 'Sompa Rani Das Portfolio' },
          { name: 'msapplication-TileColor', content: '#2b5797' },
          { name: 'theme-color', content: '#ffffff' },
          { property: 'og:updated_time', content: new Date().toISOString() },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            rel: 'apple-touch-icon',
            href: '/logo.png',
            sizes: '180x180',
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sompa Rani Das',
            url: 'https://somparani.netlify.app',
            sameAs: [
              'https://github.com/somparanidas',
              'https://www.linkedin.com/in/sompa-rani-das/',
              'https://dribbble.com/somparani',
            ],
            jobTitle: 'Creative 3D Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance',
            },
            image: 'https://somparani.netlify.app/logo.png',
            description: 'Creative 3D Developer specializing in immersive web experiences and modern UI/UX design.',
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Your University',
            },
            knowsAbout: [
              'Web Development',
              '3D Graphics',
              'React.js',
              'Next.js',
              'Three.js',
              'WebGL',
              'UI/UX Design',
            ],
          })
        }}
      />
    </>
  );
};

export default SEO;
