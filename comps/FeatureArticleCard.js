import React from 'react'
import Image from "next/image";
import Link from "next/link";
import src from "../public/firstdate-hero.jpg";

const FeatureArticleCard = (props) => {
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
        <h1 className="font-archivo text-4xl font-semibold">{props.title}</h1>
        <p className="my-4 lg:my-8">Discover Vancouver's hidden gems for an unforgettable first date! From cozy cafes to scenic parks, our article on the 'Best First Date Spots in Vancouver' will inspire you to take action and plan a date that will sweep your special someone off their feet.</p>
        <Link href="/articles/firstdate" className="text-pink-700 font-archivo font-regular underline underline-offset-4 text-2xl">Learn more</Link>
      </div>
    </div>
  )
}

export default FeatureArticleCard
