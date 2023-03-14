import React from "react";
import Link from "next/link";
import imglink from "../public/article-img.jpg";

const ArticleCard = (props) => {
  return (
    <div className="flex-grow mb-5 m-2 w-full md:w-1/2 lg:w-1/4">
      <div className="flex flex-col h-auto w-full border-2 border-gray-200 rounded-lg">
        <Link href="/articles/template">
          <div className="h-auto relative ">
            <div className="w-full h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1200px-Concord_Pacific_Master_Plan_Area.jpg"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* ///// DIVIDER ///// */}

          <div className="h-auto flex flex-col p-5 justify-start">
            <h3 className="text-sm md:text-sm lg:text-xl">
              Check out this new activity
            </h3>
            <p className="text-pink-700 font-archivo font-regular underline underline-offset-4 text-md mt-1 md:text-lg lg:text-xl">
              Read
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
