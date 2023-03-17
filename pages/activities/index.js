// import { google } from "googleapis";
// import Link from "next/link";
// import Head from "next/head";
// import { useState } from "react";
// import Pagination from "../../comps/Pagination";
// import ActivityCard from "../../comps/ActivityCard";
// import { paginate } from "../../helpers/paginate";

// export async function getServerSideProps({ query }) {
//   const auth = await google.auth.getClient({
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });

//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: process.env.SHEET_ID,
//     range: "Sheet1!A2:G100",
//   });

//   const posts = response.data.values.map((item) => {
//     var strTags = item[3];
//     var tagsArr = strTags.split(",");

//     return {
//       id: item[0],
//       name: item[1],
//       address: item[2],
//       tags: tagsArr,
//       price: item[4],
//       city: item[5],
//       img: item[6],
//     };
//   });

//   console.log(posts);

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default function Activities({ posts }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 9;

//   const onPageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const paginatedPosts = paginate(posts, currentPage, pageSize);

//   console.log(posts);
//   return (
//     <>
//       <Head>
//         <title>Activities</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/logo.svg" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400;500&family=Russo+One&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       <main class="flex flex-col w-full h-full text-center justify-center items-center">
//         <div class="flex flex-col px-12 bg-white rounded-lg w-11/12 justify-start items-center my-6 ">
//           <div>
//             <h2 class="text-left text-3xl font-roboto-mono font-bold my-4">
//               Activities to explore
//             </h2>

//             <div class="flex flex-row flex-wrap w-full -mx-4">
//               {paginatedPosts.map((post, index) => {
//                 return (
//                   <ActivityCard
//                     key={post.id}
//                     link={`activities/${index + 2}`}
//                     img={post.img}
//                     header={post.name}
//                     price={post.price}
//                     city={post.city}
//                     tags={post.tags}
//                   />
//                 );
//               })}
//             </div>
//           </div>

//           <hr></hr>
//           <Pagination
//             items={posts.length} // 49
//             currentPage={currentPage}
//             pageSize={pageSize}
//             onPageChange={onPageChange}
//           />
//           <br />

//           {/* <div class="flex flex-row flex-wrap w-full -mx-4">
//             {posts.map((post, index) => (
//               <ActivityCard
//                 key={post.id}
//                 link={`activities/${index + 2}`}
//                 img={post.img}
//                 header={post.name}
//                 price={post.price}
//                 city={post.city}
//                 tag={post.tag}
//               />
//             ))}
//           </div> */}
//         </div>
//       </main>
//     </>
//   );
// }
