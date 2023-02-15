import React from "react";
import Image from "next/image";
import { MdDragIndicator } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import activityImg from "../public/activity_image.jpg";
// import ActivityTypeTag from "./ActivityTypeTag";
import ActivityPriceTag from "./ActivityPriceTag";
import ActivityLocationTag from "./ActivityLocationTag";

const SavedActivity = () => {
  return (
    <div class="flex flex-row w-auto h-auto bg-white rounded-2xl p-4 my-4">
      {/* LEFT SIDE */}
      <div class="flex grow-0 items-center p-4 border-2 border-green-600">
        <MdDragIndicator size={30} />
        <Image
          src={activityImg}
          alt="activity image"
          // height={200}
          layout="cover"
          objectFit="content"
          style={{ borderRadius: "12px" }}
        />
      </div>

      {/* RIGHT SIDE */}
      <div class="flex grow-2 flex-col p-4 border-2 border-red-500">
        {/* TOP CONTENT */}
        <div class="flex grow flex-row border-2 border-purple-500">
          <div class="flex flex-col grow">
            <h1 class="font-archivo font-semibold text-4xl">Stanley Park</h1>
            <p class="font-archivo font-bold text-xl">
              Address: <span class="font-normal">4200 Willingdon Ave</span>
            </p>
          </div>
          <div class="flex flex-none">
            <AiFillHeart color="red" size={30} />
          </div>
        </div>

        {/* BOTTOM_CONTENT */}
        <div class="flex flex-none flex-row items-center justify-start ">
          <ActivityPriceTag price="$$" />
          <ActivityLocationTag location="Downtown" />
          <div class="border-solid border-2 border-gray-400 p-2 mr-2 mt-2 rounded-md">
            <p class="">Outdoor</p>
          </div>
          {/* <ActivityTypeTag tag="Outdoor" /> */}
        </div>
      </div>
    </div>
  );
};

export default SavedActivity;
