import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@/styles/Layout.module.css';
import Header from './header';
import Footer from './footer';

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
	const router = useRouter();

	return (
		<>
			<Head>
				<meta name="description" content={description} />
				<meta
					name="keywords"
					content={`'rollercoaster, coaster, ride, theme, park, '${additionalKeywords}`}
				/>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="canonical" href={canonicalRef} />
				<meta name="robots" content="index, follow" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
				/>

				<meta property="og:type" content={pageType} />
				<meta property="og:title" name="title" content={title} />
				<meta property="og:site_name" content="Coaster Site" />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={canonicalRef} />
				<meta property="og:image" name="image" content={imageUrl} />
				<meta property="og:image:alt" content={imageAlt} />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:image" content={imageUrl} />
				<meta name="twitter:image:alt" content={imageAlt} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />

				<link rel="icon" href="/favicon.ico" />
				<title>{title}</title>
			</Head>

			<Header />

			<main className={styles.main}>
				<div className={styles.content}>{children}</div>
			</main>

			<Footer />
		</>
	);
}

Layout.defaultProps = {
	title: 'Coaster Site',
	additionalKeywords: '',
	description:
		'Coaster Site',
	imageUrl: 'docs/finalpage.png',
	imageAlt: 'An image of the final Coaster site on a range of devices',
	canonicalRef: 'https://coaster-site.vercel.app/',
	pageType: 'website',
};
