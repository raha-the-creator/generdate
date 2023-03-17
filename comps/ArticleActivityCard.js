import React from "react";
import Link from "next/link";
import Image from "next/image";
import ActivityImg from "../public/PNE.jpg";

const ArticleActivityCard = (props) => {
  return (
    <div class="w-full h-auto mt-10 mb-12">
      {/* <Link href={props.link} class="font-archivo font-bold underline underline-offset-4 text-2xl text-pink-700">PNE Vancouver</Link> */}
      <a target="_blank" href={props.link} rel="noopener noreferrer">
        <p class="font-archivo font-bold underline underline-offset-4 text-2xl text-pink-700">
          {props.title}
        </p>
      </a>
      {/* <div className="flex items-center justify-center"> */}
        <img
          src={props.img}
          alt="activity image"
          layout="cover"
        //   objectFit="content"
          class="py-4"
        />
      {/* </div> */}
      <p class="font-archivo leading-7 text-lg ">
        {props.content}
      </p>
    </div>
  );
};

export default ArticleActivityCard;
