import React from 'react'
import Image from "next/image";
import activityImg from "../public/recroom-hero.jpg";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import autoprefixer from 'autoprefixer';
import ActivityTypeTag from './ActivityTypeTag';

const ActivityCard = () => {
    return (
        <div class="flex flex-col w-96 h-auto">
            <div class="h-48 relative">
                <div class="z-0 absolute w-full h-full">
                    {/* background image */}
                    <Image
                        src={activityImg}
                        alt="activity image"
                        layout="fill"
                        objectFit='content'
                        style={{ borderRadius: '12px' }}
                    />
                </div>

                <div class="flex w-full h-full flex-col z-10 absolute">
                    <div class="flex flex-1 items-start">
                        <button class='p-3'>
                            <AiOutlineHeart color="white" size={30} />
                        </button>
                    </div>
                    <div class="flex flex-1 flex-row">
                        <div class="flex flex-1 items-end p-3">
                            <h3 class="text-white bg-emerald-500 p-2 rounded-md">$$$</h3>
                        </div>
                        <div class="flex flex-1 items-end justify-end p-3">
                            <h3 class="text-white bg-pink-700 p-2 rounded-md">Burnaby</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* ///// DIVIDER ///// */}
            <div class="h-12 flex flex-col items-start">
                <h3 class="font-roboto-mono text-2xl font-medium mt-2">Rec Room at Brentwood</h3>
                <div class="flex">
                    <ActivityTypeTag tag={"Indoor"} />
                    <ActivityTypeTag tag={"Indoor"} />
                </div>
            </div>
        </div>
    )
}

export default ActivityCard