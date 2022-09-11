import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Grid from '../components/Grid/Grid';

/**
 * Note how the home attribute is present without a value 
 * within the Layout tag, this is to say that this Layout
 * is the Home page. There is conditional rendering within
 * the Layout component for a home page.
 */
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
          Welcome to the Next.js site, it is a sample typescript project with static prerendering.
          Markdown post have been prerendered into links and pages. 
          Below are some posts I have written!
          
          This is a single page app (SPA) site!
          </p>
        </section>
        <section>
          And look! This is a grid of squares:

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Grid rows={10} columns={10} size={45}/>
          </div>
        </section>
      </>
    </Layout>
  );
}