import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Head>
        <title>Jungle Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/images/profile.jpg" alt="Jungle" width={144} height={144} />
      <Header title="Start Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
      <h1 className="title">
        Read Learn <Link href={"/post/first-post"}>Next.js!</Link>
      </h1>
    </div>
  );
}

export default HomePage;
