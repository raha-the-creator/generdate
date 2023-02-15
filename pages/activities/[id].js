import React from "react";
import Hero from "../../comps/Hero";
import ImgSrc from "../../public/recroom-hero.jpg";
import Image from "next/image";
import Head from "next/head";
import { google } from "googleapis";

import src from "../../public/hero-home.jpg";

export async function getServerSideProps({ query }) {
  // auth
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // query
  const { id } = query;
  const range = `Sheet1!A${id}:G${id}`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // result

  const [activityid, name, address, tags, price, location, feature] =
    response.data.values[0];

  return {
    props: {
      activityid,
      name,
      address,
      tags,
      price,
      location,
      feature,
    },
  };
}

const ActivityPage = ({
  activityid,
  name,
  address,
  tags,
  price,
  location,
  feature,
}) => {
  // const ImgSrc = {feature}
  // console.log(feature)

  const mapSrc = `https://maps.google.com/maps?&q="+${address}"&output=embed`;

  return (
    <>
      {/* <div> */}
      <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400;500&family=Russo+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* NEW HERO */}
      <div class="flex justify-center items-center relative w-full h-96 p-20">
        <div class="absolute object-cover w-full h-full">
          <img
            src={feature}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div class="relative flex flex-col items-center">
          <h1 class="text-red-500 text-1xl font-roboto-mono font-extralight"></h1>
          <p class="text-red-500 text-5xl font-medium font-roboto-mono"></p>
        </div>
      </div>
      {/* NEW HERO */}

      {/* <Hero img={ImgSrc} /> */}

      <div className="flex justify-center w-full">
        <div className="flex w-3/4 p-5 border-2 border-red-500">
          {/* 2 columns of activity data */}
          <div className="leftDiv flex flex-grow flex-col p-4 px-24 border-2 border-purple-300">
            <h1 className="text-2xl font-montserrat font-bold">{name}</h1>
            <p className="font-montserrat text-md leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="font-montserrat font-bold text-2xl leading-7 mt-10">
              Subheader
            </h2>
            <p className="font-montserrat text-md leading-7">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="rightDiv flex flex-col">
            <div className="flex flex-col p-10 bg-gray-300 mb-5">
              <div className="my-2">
                <h3 className="font-bold">Activity Type:</h3>
                <p>{tags}</p>
              </div>

              <div className="my-2">
                <h3 className="font-bold">City:</h3>
                <p>{location}</p>
              </div>

              <div className="my-2">
                <h3 className="font-bold">Address:</h3>
                <p>{address}</p>
              </div>
            </div>

            <iframe
              width="300"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src={mapSrc}
            ></iframe>

            <button className="w-full bg-gray-400 py-3 mt-5">
              Add to list
            </button>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default ActivityPage;
