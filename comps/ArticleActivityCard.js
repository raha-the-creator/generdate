import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ActivityImg from "../public/PNE.jpg"

const ArticleActivityCard = (props) => {
    return (
        <div class="w-full h-auto mt-10 mb-12">
            <Link href={props.link} class="font-archivo font-bold underline underline-offset-4 text-2xl text-pink-700">PNE Vancouver</Link>
            <Image
                src={ActivityImg}
                alt="activity image"
                layout="cover"
                objectFit='content'
                class="py-4"
            />
            <p class="font-archivo leading-7">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    )
}

export default ArticleActivityCard