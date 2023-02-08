import React from 'react'
import Image from "next/image";
import activityImg from "../public/recroom-hero.jpg";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import autoprefixer from 'autoprefixer';
import ActivityTypeTag from './ActivityTypeTag';
import Link from 'next/link';

const ActivityCard = (props) => {
    return (
        <div class="px-4 w-1/3">
            <div class="flex flex-col w-full h-auto pb-20 mb-5 border-2 border-gray-300 rounded-lg p-4">
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
                    <Link href="/activities/[id].js" class="font-roboto-mono text-2xl font-medium mt-2 text-left">{props.header}</Link>
                    {/* <h3 class="font-roboto-mono text-2xl font-medium mt-2">Rec Room at Brentwood</h3> */}
                    <div class="flex">
                        <ActivityTypeTag tag={"Indoor"} />
                        <ActivityTypeTag tag={"Indoor"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard