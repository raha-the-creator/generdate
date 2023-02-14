import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Hero from "../comps/Hero";
import heroImg from "../public/hero-home.jpg";
import ArticleCard from "../comps/ArticleCard";
import ActivityCard from "../comps/ActivityCard";

import { google } from "googleapis";
import postcss from "postcss";

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet1!A2:G7",
  });

  const posts = response.data.values.map((item) => {
    return {
      id: item[0],
      name: item[1],
      address: item[2],
      tag: item[3],
      price: item[4],
      city: item[5],
      img: item[6],
    };
  });

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>GenerDate - plan your dates easier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400;500&family=Russo+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main class="flex flex-col w-full h-full text-center justify-center items-center">
        <Hero
          img={heroImg}
          topText="Plan your dates easier with"
          header="GenerDate"
        />

        <div class="px-12 flex justify-center items-center">
          <ArticleCard />
        </div>

        <div class="flex flex-col px-12 bg-white rounded-lg w-11/12 justify-start mb-6">
          <h2 class="text-left text-3xl font-roboto-mono font-bold my-4">
            Popular places
          </h2>

          <div class="flex flex-row flex-wrap w-full -mx-4">
            {posts.map((post, index) => (
                <ActivityCard key={post.id} link={`activities/${index + 2}`} img={post.img} header={post.name} price={post.price} city={post.city} />
            ))}
            {/* <ActivityCard header={"activity 1"} /> */}
          </div>
        </div>
      </main>
    </>
  );
}
