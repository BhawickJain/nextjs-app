import Image from 'next/image'
import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script'

export default function FirstPost(): JSX.Element {
  console.log('Hello First Post in the console')
  return (
    <>
      <Head>
        <title>First Post</title>
        {/* doesn't seem to work! */}
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"
      />
    </>
  );
}
