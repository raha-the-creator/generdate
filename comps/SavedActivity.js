import React from "react";
import Image from "next/image";
import { MdDragIndicator } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import activityImg from "../public/activity_image.jpg";
import ActivityTypeTag from "./ActivityTypeTag";
import ActivityPriceTag from "./ActivityPriceTag";
import ActivityLocationTag from "./ActivityLocationTag";

const SavedActivity = () => {
  return (
    <div class="flex flex-row w-full h-64 bg-white rounded-2xl p-4 my-4">
      {/* LEFT SIDE */}
      <div class="flex items-center">
        <MdDragIndicator size={30} />
        <Image
          src={activityImg}
          alt="activity image"
          height={200}
          objectFit="content"
          style={{ borderRadius: "12px" }}
        />
      </div>

      {/* RIGHT SIDE */}
      <div class="flex flex-row p-4 border-2 border-red-500">
        {/* LEFT CONTENT */}
        <div class="border-2 border-blue-500">
          <div class="flex flex-1 flex-col">
            <h1 class="font-archivo font-semibold text-2xl">Stanley Park</h1>
            <p class="font-archivo font-bold">
              Address: <span class="font-normal">4200 Willingdon Ave</span>
            </p>
          </div>

          <div class="flex flex-1 flex-row items-end justify-end">
            <ActivityPriceTag price="$$" />
            <ActivityTypeTag tag="Outdoor" />
            <ActivityLocationTag location="Downtown" />
          </div>
        </div>

        {/* RIGHT_HEART */}
        <div>
          <AiFillHeart color="red" size={30} />
        </div>
      </div>
    </div>
  );
};

export default SavedActivity;
