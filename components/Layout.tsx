import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

interface LayoutProps {
  children: JSX.Element;
  home: boolean;
}

const name = "Bhawick Jain";
export const siteTitle = "My first Next.js Site!";

/**
 * To use this container class inside components/layout.js, you need to:
 * - Import the CSS file and assign a name to it, like styles
 * - Use styles.container as the className
 *
 * This is what CSS Modules does: It automatically generates unique
 * class names. As long as you use CSS Modules, you don’t have to worry
 * about class name collisions.
 *
 */
export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              // priority //   disables lazy loading
              src={`https://bhawickjain.github.io/nextjs-app/images/profile.jpg`}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  // priority
                  src={`https://bhawickjain.github.io/nextjs-app/images/profile.jpg`}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
