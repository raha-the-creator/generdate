import React from 'react'
import Image from "next/image";
import Link from "next/link";
import src from "../public/article-card.jpg";

const FeatureArticleCard = () => {
  return (
    <div class="flex flex-row bg-white w-full drop-shadow-md rounded-lg my-4">
      <div class="flex flex-1 object-cover">
        <Image
          alt="article pic"
          src={src}
          // layout="fill"
          objectFit='content'
          class="rounded-l-lg"
        />
      </div>

      <div class="flex flex-1 flex-col space-y-4 justify-center text-left p-10">
        <h1 class="font-archivo text-4xl font-semibold">Best "First Date" spots to check out in Vancouver</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...</p>
        <Link href="/articles/template" class="text-pink-700 font-archivo font-regular underline underline-offset-4 text-2xl">Learn more</Link>
      </div>
    </div>
  )
}

export default FeatureArticleCard