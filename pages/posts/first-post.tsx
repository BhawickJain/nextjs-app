import Image from 'next/image'
import Link from "next/link";

export default function FirstPost(): JSX.Element {
  return (
    <>
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
