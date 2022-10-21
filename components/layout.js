import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@/styles/Layout.module.css'
import Header from './header'
import Footer from './footer'

export default function Layout({
  title,
  additionalKeywords,
  description,
  imageUrl,
  imageAlt,
  canonicalRef,
  pageType,
  children,
}) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="canonical" href={canonicalRef && canonicalRef} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description && description} />
        <meta
          name="keywords"
          content={`'the, first, drop, rollercoaster, coaster, ride, theme, park, '${additionalKeywords}`}
        />

        <meta property="og:type" content={pageType} />
        <meta property="og:title" name="title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" name="image" content={imageUrl} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:site_name" content="The First Drop" />
        <meta property="og:url" content={canonicalRef} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={imageAlt} />

        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>

      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'The First Drop',
  additionalKeywords: '',
  description:
    'A website for logging and ranking your coaster list, and creating a wish list of coasters you want to ride',
  imageUrl: 'docs/finalpage.png',
  imageAlt: 'An image of The First Drop site on a range of devices',
  canonicalRef: 'https://the-first-drop.vercel.app/',
  pageType: 'website',
}
