import { getSortedPostsData, IPost } from '../lib/posts';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Link from "next/link";
import utilStyles from '../styles/utils.module.css';

interface HomeProps {
  allPostsData: IPost[]
}

/**
 * Note how the home attribute is present without a value 
 * within the Layout tag, this is to say that this Layout
 * is the Home page. There is conditional rendering within
 * the Layout component for a home page.
 */
export default function Home( { allPostsData }: HomeProps ) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Bhawick Jain</p>
          <p>
          Welcome to the Next.js site, it is a sample typescript project with static prerendering.
          Markdown post have been prerendered into links and pages.
          </p>

        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {date}
                <br/>
                <Link href={`/posts/${id}`}>{title}</Link>
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