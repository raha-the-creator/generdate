import React from "react";
import Image from "next/image";
import activityImg from "../public/recroom-hero.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import autoprefixer from "autoprefixer";
import ActivityTypeTag from "./ActivityTypeTag";
import Link from "next/link";

const ActivityCard = (props) => {
  const tags = props.tags;

  return (
    <div class="flex flex-col w-96 h-auto mr-2 pb-20 mb-5">
      <div class="h-48 relative">
        <div class="z-0 absolute w-full h-full">
          {/* background image */}
          {/* <Image
                        src={activityImg}
                        alt="activity image"
                        layout="fill"
                        objectFit='content'
                        style={{ borderRadius: '12px' }}
                    /> */}
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
              <h3 class="text-white bg-emerald-500 p-2 rounded-md">
                {props.price}
              </h3>
            </div>
            <div class="flex flex-1 items-end justify-end p-3">
              <h3
                className={`text-white text-sm font-roboto-mono p-2 rounded-md ${
                  props.city === "Squamish"
                    ? "bg-red-600"
                    : props.city === "Richmond"
                    ? "bg-yellow-600"
                    : props.city === "Vancouver"
                    ? "bg-yellow-800"
                    : props.city === "North Vancouver"
                    ? "bg-green-600"
                    : props.city === "West Vancouver"
                    ? "bg-blue-500"
                    : props.city === "Burnaby"
                    ? "bg-red-700"
                    : props.city === "Coquitlam"
                    ? "bg-purple-700"
                    : props.city === "New Westminster"
                    ? "bg-teal-500"
                    : props.city === "Port Moody"
                    ? "bg-indigo-500"
                    : "bg-gray-500"
                }`}
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
          href="/activities/[id].js"
          class="font-roboto-mono text-2xl font-medium mt-2 text-left"
        >
          {props.header}
        </Link>
        {/* <h3 class="font-roboto-mono text-2xl font-medium mt-2">Rec Room at Brentwood</h3> */}
        <div class="flex">
          {/* <ActivityTypeTag tag={"Indoor"} />
          <ActivityTypeTag tag={"Indoor"} /> */}
          {tags.map((tag) => {
            return (
              <div class="border-solid border-2 border-gray-400 p-2 mr-2 mt-2 rounded-md">
                {tag}
              </div>
            );
          })}
          <p>{props.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
