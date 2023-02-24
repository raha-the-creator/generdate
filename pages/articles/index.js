import React from "react";
import Hero from "../../comps/Hero";
import heroImg from "../../public/article-hero.jpg";
import Head from "next/head";
import Image from "next/image";

import ArticleCard from "../../comps/ArticleCard";
import FeatureArticleCard from "../../comps/FeatureArticleCard";

const Article = () => {
  return (
    <div class="flex items-center flex-col bg-red-white">
      <Head>
        <title>Articles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400;500&family=Russo+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="px-12 flex justify-center items-center flex-col">
        <FeatureArticleCard />

        <hr class="h-px w-full my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <h2 class="text-left text-3xl font-roboto-mono font-bold my-4">
          Latest articles
        </h2>

        <div className="flex flex-row flex-wrap w-full -mx-4">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
};

export default Article;
