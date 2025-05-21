import { DefaultSeo } from 'next-seo';

const SEO = () => (
  <DefaultSeo
    titleTemplate="%s | Sompa Rani Das - 3D Developer Portfolio"
    defaultTitle="Sompa Rani Das | 3D Developer Portfolio"
    description="Dynamic Full-Stack Developer portfolio featuring 3D web experiences, React, Next.js, and modern UI/UX design. Explore projects, skills, and contact information."
    canonical="https://portfoliobyompatel.netlify.app/"
    openGraph={{
      type: 'website',
      locale: 'en_US',
      url: 'https://portfoliobyompatel.netlify.app/',
      site_name: 'Sompa Rani Das | 3D Developer Portfolio',
      title: 'Sompa Rani Das | 3D Developer Portfolio',
      description: 'Dynamic Full-Stack Developer portfolio featuring 3D web experiences, React, Next.js, and modern UI/UX design. Explore projects, skills, and contact information.',
      images: [
        {
          url: 'https://portfoliobyompatel.netlify.app/logo.png',
          width: 800,
          height: 600,
          alt: 'Sompa Rani Das Portfolio Logo',
        },
      ],
    }}
    twitter={{
      handle: '@somparanidas',
      site: '@somparanidas',
      cardType: 'summary_large_image',
    }}
    additionalMetaTags={[
      { name: 'keywords', content: '3D Developer, Portfolio, Next.js, React, UI/UX, WebGL, Three.js, Tailwind CSS, Full Stack, Sompa Rani Das' },
      { name: 'author', content: 'Sompa Rani Das' },
      { name: 'robots', content: 'index, follow' },
    ]}
  />
);

export default SEO;
