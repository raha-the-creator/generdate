import React from 'react'
import Image from "next/image";
import Link from "next/link";
import src from "../public/article-card.jpg";

const ArticleCard = () => {
  return (
    <div class="flex flex-row bg-white w-2/3 drop-shadow-md rounded-lg my-8 mx-4">
      <div class="flex flex-1 object-cover">
        <Image
          alt="article pic"
          src={src}
          width="100%"
          height="100%"
          class="rounded-l-lg"
        />
      </div>

      <div class="flex flex-1 flex-col text-left p-10">
        <h1 class="font-archivo text-4xl font-semibold">Best "First Date" spots to check out in Vancouver</h1>
        <Link href="/" class="font-archivo font-regular underline underline-offset-4 text-2xl">Learn more</Link>
      </div>
    </div>
  )
}

export default ArticleCard