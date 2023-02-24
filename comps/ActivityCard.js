import React from "react";
import Image from "next/image";
import activityImg from "../public/recroom-hero.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import autoprefixer from "autoprefixer";
import Link from "next/link";

const ActivityCard = (props) => {
  const tags = props.tags;

  return (
    <div class="px-4 w-full md:w-1/2 lg:w-1/3">
      <div class="flex flex-col w-full h-auto pb-24 mb-5 border-2 border-gray-300 rounded-lg p-4">
        <div class="h-48 relative">
          <div class="z-0 absolute w-full h-full">
            <img
              src={props.img}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div class="flex w-full h-full flex-col z-10 absolute">
            <div class="flex flex-1 items-start">
              <button class="p-3">
                <AiOutlineHeart color="white" size={30} />
              </button>
            </div>
            <div class="flex flex-1 flex-row">
              <div class="flex flex-1 items-end p-3">
                <h3 class="text-white bg-emerald-600 p-2 rounded-md">
                  {props.price}
                </h3>
              </div>
              <div class="flex flex-1 items-end justify-end p-3">
                <h3
                  className={
                    props.city === ["Burnaby", "Coquitlam", "North Vancouver"]
                      ? "text-white text-sm bg-pink-700 p-2 rounded-md"
                      : "text-white text-sm bg-blue-700 p-2 rounded-md"
                  }
                >
                  {props.city}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* ///// DIVIDER ///// */}

        <div class="h-12 flex flex-col items-start">
          <Link
            href={props.link}
            class="font-roboto-mono text-xl font-medium mt-2 text-left"
          >
            {props.header}
          </Link>
          <div class="flex ">
            {tags.map((tag) => {
              return (
                <div class="border-solid border-2 border-gray-400 p-2 mr-2 mt-2 rounded-md">
                  <p>{tag}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
