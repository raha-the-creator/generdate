import Head from "next/head";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Hero from "../comps/Hero";
import heroImg from "../public/hero-home.jpg";
import ArticleCard from "../comps/FeatureArticleCard";
import ActivityCard from "../comps/ActivityCard";
import ArticleCardComp from "../comps/ArticleCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "locations" });

  return {
    props: {
      locations: res.items.slice(0, 3),
      revalidate: 1
    },
  };
}

export default function Home({ locations }) {
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

        <div class="flex flex-col bg-white mb-4 w-full justify-center items-center px-12 lg:px-32">
          <section className="flex flex-wrap items-center bg-white">
            <div className="w-full lg:w-1/2 text-left py-4">
              <h2 className="text-3xl font-bold mb-4">About GenerDate</h2>
              <p className="mb-4 text-lg">
                Tired of the same old dinner-and-a-movie routine? Look no
                further than GenerDate, where it offers a wide range of unique
                and exciting date ideas to help you and your partner create
                unforgettable memories.
              </p>
              <p className="mb-4 text-lg">
                This easy-to-use web app allows you to filter your search for
                date ideas based on your preferred location, budget, and
                interests. Whether you're looking for a romantic night out or a
                fun-filled adventure, we have plenty of options to choose from.
              </p>
              <p className="mb-4 text-lg">
                But that's not all – our blog is full of helpful articles and
                tips to make your date planning experience even better. From
                choosing the perfect spot for a first date to navigating the
                different seasons in Vancouver, this blog has everything you
                need to know to plan the perfect date.
              </p>
              <p className="mb-4 text-lg">
                Check out GenerDate and start exploring all the amazing date
                ideas that Vancouver has to offer!
              </p>
            </div>
            <div className="w-full flex items-center p-4 lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 sm:items-center sm:justify-center">
              <div className="h-full lg:px-4">
                <Image
                  src="/features.jpg"
                  alt="About Us Image"
                  width={750}
                  height={800}
                  objectFit="cover"
                />
                <p>Features</p>
              </div>
            </div>
          </section>
        </div>

        <div class="flex flex-col px-12 bg-white rounded-lg w-11/12 justify-start mb-6">
          <h2 class="text-left text-3xl font-roboto-mono font-bold my-4">
            Popular activities
          </h2>

          <div class="flex flex-row flex-wrap w-full -mx-4">
            {locations.map((location) => (
              <ActivityCard
                key={location.sys.id}
                link={`/activities/${location.fields.slug}`}
                as={`/activities/${location.fields.slug}`}
                img={"https:" + location.fields.featureImage.fields.file.url}
                header={location.fields.name}
                price={location.fields.price}
                city={location.fields.city}
                tags={location.fields.tags}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
