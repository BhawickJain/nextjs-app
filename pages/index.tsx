import { getSortedPostsData, IPost } from '../lib/posts';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Link from "next/link";
import utilStyles from '../styles/utils.module.css';

interface HomeProps {
  allPostsData: IPost[]
}

export default function Home( { allPostsData }: HomeProps ) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {/* Keep the existing code here */}
        <section className={utilStyles.headingMd}>
          <p>Bhawick Jain</p>
          <p>
          Welcome to the Next.js site, it is a sample typescript project with static prerendering.
          Markdown post have been prerendered into links and pages.
          </p>
          <Link href="/posts/first-post">Check my first Post out!</Link>
        </section>
        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}