import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Link from "next/link";
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Bhawick Jain</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
          <Link href="/posts/first-post">Check my first Post out!</Link>
        </section>
      </>
    </Layout>
  );
}

