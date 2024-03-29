import React from "react";
import Hero from "../../comps/Hero";
import heroImg from "../../public/firstdate-hero.jpg";
import Head from "next/head";
import Image from "next/image";
import author from "../../public/author.jpg";
import ActivityImg from "../../public/PNE.jpg";

import ArticleActivityCard from "../../comps/ArticleActivityCard";

const Article = () => {
  return (
    <div class="flex items-center flex-col bg-red-white">
      <Head>
        <title>Best "First date" spots </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400;500&family=Russo+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Hero img={heroImg} />

      <div class="flex flex-col w-3/4 mt-10 sm:my-0 lg:w-2/4">
        <h2 class="font-archivo font-semibold text-4xl my-5">Best "First Date" spots to check out in Vancouver</h2>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <a href="https://www.instagram.com/rah0nty/">
          <div class="flex flex-row py-2 items-center">
            <div class="flex items-center p-2 rounded-full">
              <Image src={author} width={50} height={50} alt="author image" className="rounded-full"/>
            </div>
            <div>
              <h2 class="font-archivo font-bold p-0 text-md">Raha</h2>
              <p>The creator</p>
            </div>
          </div>
        </a>

        <p class="font-archivo text-lg leading-7">The first date is always an exciting and nerve-wracking experience. One of the most important factors in making a great first impression is choosing the perfect spot. The right ambiance, location, and activities can make all the difference. This is where our article on the "Best First Date Spots in Vancouver" comes in. In this comprehensive guide, we have curated a list of some of the most romantic, unique, and memorable locations for your first date in Vancouver. Whether you are looking for a cozy cafe or a scenic park, we have got you covered. So, let's dive in and explore the best first date spots that Vancouver has to offer!</p>

        <ArticleActivityCard title={"Breka Bakery"} link={"https://www.google.com/maps/place/Breka+Bakery+%26+Caf%C3%A9+(Davie)/@49.2787594,-123.1322036,15z/data=!4m6!3m5!1s0x548673d48bfdef25:0xa0247f578934fdaf!8m2!3d49.2784527!4d-123.1278688!16s%2Fg%2F1tfdd4j_?coh=164777&entry=tt&shorturl=1"} img={"https://www.janksdesigngroup.com/wp-content/uploads/2019/09/Breka1.jpg"} content={"Regularly voted among Vancouver’s best bakeries and cafes, it offers high-quality and reasonably priced coffee, breads, donuts, pastries, sandwiches, cakes, cookies and more – 24 hours a day, 7 days a week, 365 days a year – in each of its 7 locations on Fraser Street, Bute Street, Davie Street, West 4th Avenue, Denman Street, Main Street and West Hastings Street. Breka Bakery & Café is a local family business born in 2006 in the lively Vancouver neighbourhood of Sunset."} />

        <ArticleActivityCard title={"Rec Room at Brentwood"} link={"https://www.google.com/maps/place/The+Rec+Room+at+Brentwood/@49.2673906,-123.0043517,17z/data=!3m2!4b1!5s0x548677304a5e7e31:0x4a38c21eac564f4f!4m6!3m5!1s0x548671c609adf939:0xbba731d63bb55bb!8m2!3d49.2673906!4d-123.002163!16s%2Fg%2F11j30l55b0?coh=164777&entry=tt&shorturl=1"} img={"https://604now.com/wp-content/uploads/2021/07/rec-room-brentwood-half.e.jpg"} content={"The Rec Room at Brentwood is a massive entertainment complex located in Burnaby, BC. The facility features over 50,000 square feet of space, including a variety of games, activities, and dining options. Visitors can enjoy arcade games, virtual reality experiences, live events, and more. You should visit The Rec Room at Brentwood if you're looking for a fun and exciting entertainment experience. With a wide range of activities and dining options available, there's something for everyone to enjoy."} />

        <ArticleActivityCard title={"per se Social Corner"} link={"https://www.google.com/maps/place/per+se+Social+Corner/@49.2787288,-123.120726,17z/data=!3m1!4b1!4m6!3m5!1s0x5486717e08c9de97:0x28f9cd6e1cd9c408!8m2!3d49.2787253!4d-123.118532!16s%2Fg%2F11cjkp_vw3?coh=164777&entry=tt&shorturl=1"} img={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS-z1eE6eTWT2GPu943a0tl_lLxV-6qQlHMk1a7k_PLiTyNTfJOLOp_k3yRuPYTinc_ZtVdurD5LQnozJVFo73w5MlWt-4NAhmpG0xSNOeDWoi4qd5ZOtYeZVzXf3VAPeXklNWTIA4ns-wbzI9ZO8-SAGE7t4I2ZXaqk92kyBMLIbQ-4GxQqGprmPx2A/s3000/Per%20Se.jpg"} content={"Per se Social Corner is an Italian restaurant located in Vancouver, British Columbia, serving authentic Italian cuisine and handcrafted cocktails in a stylish and modern setting. The restaurant's menu features a variety of classic Italian dishes made with fresh, locally-sourced ingredients, including handmade pastas, wood-fired pizzas, and seafood dishes. With its great food, drinks, and atmosphere, Per se Social Corner is a must-visit for any Italian food lover in the Vancouver area. You should visit Per se Social Corner in Vancouver for its authentic Italian cuisine made with fresh, locally-sourced ingredients and its stylish and modern atmosphere. The restaurant's menu features a variety of classic Italian dishes and handcrafted cocktails, making it a great spot for any Italian food lover in the Vancouver area."} />
        
        <ArticleActivityCard title={"Say Hello Sweets"} link={"https://www.google.com/maps/place/Say+Hello+Sweets/@49.2790851,-123.1060934,17z/data=!3m2!4b1!5s0x5486717a5ffead83:0xe0347a73a4a6068f!4m6!3m5!1s0x5486718d505c5805:0x7c1c8c72925787ae!8m2!3d49.2790817!4d-123.1018716!16s%2Fg%2F11fpv8fd3h?coh=164777&entry=tt&shorturl=1"} img={"https://i.cbc.ca/1.5305033.1569965068!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/say-hello-sweets.jpg"} content={"Say Hello Sweets is a vegan ice cream shop in Vancouver, offering a wide range of delicious and unique ice cream flavors made with coconut milk and other plant-based ingredients. The shop also serves a variety of baked goods and desserts, including ice cream sandwiches and sundaes. With its creative flavors and vegan options, Say Hello Sweets is a must-visit for any ice cream lover in Vancouver. You should visit Say Hello Sweets in Vancouver for its delicious and unique vegan ice cream flavors made with coconut milk and other plant-based ingredients. The shop also offers a variety of baked goods and desserts, making it a great spot for any dessert lover in Vancouver."} />

      </div>
    </div>
  );
};

export default Article;
