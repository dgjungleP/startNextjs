import Link from "next/link";
import Head from "next/head";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Jungle First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <h1 className="title">
        <Link href={"/"}>Back to home</Link>
      </h1>
    </>
  );
}
