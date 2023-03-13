import React from 'react'
import Image from "next/image";
import Link from "next/link";
import src from "../public/article-card.jpg";

const FeatureArticleCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white w-full drop-shadow-md rounded-lg my-4">
      <div className="lg:w-1/2 object-cover">
        <Image
          alt="article pic"
          src={src}
          width={500}
          height={500}
          layout="responsive"
          objectFit='content'
          className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none lg:rounded-r-lg"
        />
      </div>

      <div className="flex flex-col lg:w-1/2 justify-center text-left p-10">
        <h1 className="font-archivo text-4xl font-semibold">Best "First Date" spots to check out in Vancouver</h1>
        <p className="my-4 lg:my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...</p>
        <Link href="/articles/template" className="text-pink-700 font-archivo font-regular underline underline-offset-4 text-2xl">Learn more</Link>
      </div>
    </div>
  )
}

export default FeatureArticleCard
