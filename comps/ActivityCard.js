import React from 'react'
import Image from "next/image";
import activityImg from "../public/recroom-hero.jpg";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import autoprefixer from 'autoprefixer';

const ActivityCard = () => {
    return (
        <div class="flex flex-col bg-white w-96 h-80">
            <div class="relative">
                <div class="z-0">
                    {/* background image */}
                    <Image
                        src={activityImg}
                        alt="activity image"
                        width={400}
                        hight={400}
                    />
                </div>

                <div class="z-10">
                    <div>
                        {/* stick everything to the top of parent */}
                        <button>
                            <AiOutlineHeart />
                        </button>
                    </div>
                    <div>
                        {/* stick to the bottom - align/justify */}
                        <h3>$$$</h3>
                        <h3>Burnaby</h3>
                    </div>
                </div>
            </div>
            {/* ///// DIVIDER ///// */}
            <div>BOTTOM part - activity name, activity tags</div>
        </div>
    )
}

export default ActivityCard