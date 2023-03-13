import React from "react";
import Link from "next/link";
import imglink from "../public/article-img.jpg";

const ArticleCard = (props) => {
  return (
    <div className="flex flex-col w-auto h-auto pb-20 mb-5 border-2 border-gray-300 rounded-lg md:w-1/2 lg:w-1/4">
      <Link href="/articles/template">
        <div className="h-48 relative ">
          <div className="z-0 absolute w-full h-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1200px-Concord_Pacific_Master_Plan_Area.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* ///// DIVIDER ///// */}

        <div className="h-12 flex flex-col p-5 justify-start">
          <h3>
            Check out this new activity this upcoming weekends fadsfadsfa sfdsaf
          </h3>
          <p className="text-pink-700 font-archivo font-regular underline underline-offset-4 text-md mt-1">
            Read
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
