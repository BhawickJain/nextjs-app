import Image from 'next/image'
import Link from "next/link";
import Head from 'next/head';

export default function FirstPost(): JSX.Element {
  return (
    <>
      <Head>
        <title>First Post</title>
         <script src="https://connect.facebook.net/en_US/sdk.js" />
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
